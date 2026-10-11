import type { TaskStatus } from './data';
export type TaskProgress = { status: TaskStatus; attempt: string; nextStep: string; hintLevel: number; explanation: string; answer: number | null; };
export type LearningState = { version: 1; progress: Record<string,TaskProgress>; focusSeconds: number; sessions: number; };
export const emptyProgress = (): TaskProgress => ({status:'ready',attempt:'',nextStep:'',hintLevel:0,explanation:'',answer:null});
export const initialState = (): LearningState => ({version:1,progress:{},focusSeconds:0,sessions:0});
export function parseState(raw: string | null): LearningState {
 if (!raw) return initialState();
 try { const x: unknown = JSON.parse(raw); if(typeof x!=='object'||x===null) return initialState(); const s=x as Record<string,unknown>;
 if(s.version!==1||typeof s.progress!=='object'||s.progress===null||Array.isArray(s.progress)) return initialState();
 const progress: Record<string,TaskProgress>={};for(const [id,value] of Object.entries(s.progress)){if(!/^[a-z][a-z0-9-]{0,80}$/.test(id)||!value||typeof value!=='object')continue;const p=value as Record<string,unknown>;const status=['ready','working','stuck','review','completed'].includes(String(p.status))?p.status as TaskStatus:'ready';progress[id]={status,attempt:typeof p.attempt==='string'?p.attempt.slice(0,20000):'',nextStep:typeof p.nextStep==='string'?p.nextStep.slice(0,2000):'',hintLevel:typeof p.hintLevel==='number'&&Number.isFinite(p.hintLevel)?Math.min(3,Math.max(0,Math.floor(p.hintLevel))):0,explanation:typeof p.explanation==='string'?p.explanation.slice(0,10000):'',answer:typeof p.answer==='number'&&[0,1,2].includes(p.answer)?p.answer:null};}
 return {version:1,progress,focusSeconds:typeof s.focusSeconds==='number'&&Number.isFinite(s.focusSeconds)?Math.max(0,Math.floor(s.focusSeconds)):0,sessions:typeof s.sessions==='number'&&Number.isFinite(s.sessions)?Math.max(0,Math.floor(s.sessions)):0};
 }catch{return initialState();}
}
export function reflectionReady(answer:number|null,explanation:string):boolean{return answer!==null&&explanation.trim().length>=20;}
export function canComplete(answer:number|null,expected:number,explanation:string):boolean{return reflectionReady(answer,explanation)&&answer===expected;}
export function nextHint(level:number):number{return Math.min(3,Math.max(0,level)+1);}
export function timerRemaining(deadline:number,now:number):number{return Math.max(0,Math.ceil((deadline-now)/1000));}
export function suggestedTask(ids:string[],progress:Record<string,TaskProgress>):string|undefined{return ids.find(id=>progress[id]?.status==='working'||progress[id]?.status==='stuck')??ids.find(id=>progress[id]?.status!=='completed');}
