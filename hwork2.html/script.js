function Working(name, lname, patronymic, age, position, experience, organization, date){
   this.name = name;
   this.getName = function(){
       return this.name;
   }
   this.lname = lname;
   this.getLname = function(){
       return this.lname;
   }
   this.patronymic = patronymic;
   this.getPatronymic = function(){
       return this.patronymic;
   }
   this.age = age;
   this.getAge = function(){
       return this.age + ' лет';
   }
   this.position = position;
   this.getPosition = function(){
       return this.position;
   }
   this.experience = experience;
   this.getExperience = function(){
       return this.experience;
   }
   this.organization = organization;
   this.getOrganization = function(){
       return this.organization;
   }
   this.date = date;
   this.getDate = function(){
       return this.date;
   }

}
 working = new Working();
 working.name = document.getElementById("name").value;
//console.log(document.getElementById('name').value)

function check(){
  document.write(working.name);
  }
