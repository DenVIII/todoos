(()=>{"use strict";class t{constructor(t){this.title=t,this._project=[]}addNewTask(t){this._project.push(t)}getProject(){return Array.from(this._project)}getTitle(){return this.title}}const e=new class{constructor(t,e,s,i="-"){this.title=t,this.dueDate=e,this.id=s,this.description=i}getTitle(){return this.title}getDueDate(){return this.dueDate}getId(){return this.id}getDescription(){return this.description}setTitle(t){this.title=t}setDueDate(t){this.dueDate=t}setDescription(t){this.description=t}}("First task (second try)","01.04.24","12f"),s=new t("New Project");console.log(e.getTitle()),console.log(e),console.log(s.getProject()),s.addNewTask(e),console.log(s.getProject());const i=new t("Today");i.addNewTask({abc:11}),console.log(i.getProject()),console.log(i.getTitle())})();