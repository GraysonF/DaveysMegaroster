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
        const listItem = this.buildListItem(student);
        this.studentList.appendChild(listItem);
    },
    
    buildListItem(student) {
        const li = document.createElement('li');
        li.textContent = student.name;
        return li;
    }

}
megaroster.init('#studentList');