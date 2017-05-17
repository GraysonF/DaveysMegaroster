$(document).foundation()

const megaroster = {
    students: [],



    init(listSelector) {
        this.studentList = document.querySelector(listSelector);
        this.max = 1;
        document
        .querySelector('#new-student')
        .addEventListener('submit', this.addStudent.bind(this));
    },

    addStudent(ev) {
        ev.preventDefault();
        const f = ev.target;
       // const studentName = f.studentName.value; // or this.studentName.value (not as safe)
       const student = {
           name: f.studentName.value,
           id: this.max++,
       };
        this.students.push(student);
        const listItem = this.buildListItem(student);
        this.studentList.appendChild(listItem);
        f.reset();
    },
    
    buildListItem(student) {
        const li = document.createElement('li');
        li.textContent = student.name;
        //li.setAttribute("data-id", student.id); Another way to do the next line
        li.dataset.id = student.id;
        return li;
    }

}
megaroster.init('#studentList');