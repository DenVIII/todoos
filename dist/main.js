(()=>{"use strict";class t{constructor(t){this.title=t,this._project=[]}addNewTask(t){this._project.push(t)}getProject(){return Array.from(this._project)}getTitle(){return this.title}}const e=new class{constructor(t,e,s,o="-"){this.title=t,this.dueDate=e,this.id=s,this.description=o}getTitle(){return this.title}getDueDate(){return this.dueDate}getId(){return this.id}getDescription(){return this.description}setTitle(t){this.title=t}setDueDate(t){this.dueDate=t}setDescription(t){this.description=t}}("First task (second try)","01.04.24","12f"),s=new t("New Project"),o=new class{constructor(){this._projectsList=[]}getProjectsList(){return this._projectsList}addNewProject(t){this._projectsList.push(t)}};o.addNewProject(s),console.log(e.getTitle()),console.log(e),console.log(s.getProject()),s.addNewTask(e),console.log(s.getProject());const i=new t("Today");o.addNewProject(i),i.addNewTask({abc:11}),console.log(i.getProject()),console.log(i.getTitle()),console.log(o)})();