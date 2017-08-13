(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    
    const container = document.getElementById('container'),
          edit = document.getElementsByClassName('glyphicon-edit'),
          trash = document.getElementsByClassName('glyphicon-trash');
           
    let name,
        lastName,
        email,
        img,
        skills,
        btn_save,
        btn_cancel,
        alertValidation,
        table,
        thead,
        tbody,
        htr,
        btr;
    
    
    //function for creating form
    (function (){
        
        const formDiv = document.createElement('div');
        formDiv.setAttribute('id','formDiv');
        
        const form = document.createElement('form');
        form.setAttribute('id','myForm');
        form.setAttribute('name','myForm');
        form.setAttribute('class','form-horizontal');
        form.noValidate = true;
        
        /***************** name *********************/
        
        const div_1 = document.createElement('div');
        div_1.setAttribute('class','form-group');
        
        const label_1 = document.createElement('label');
        label_1.innerHTML = 'Enter your name';
        label_1.setAttribute('class','control-label col-md-2');
        label_1.setAttribute('for','name');
        
        const inner_div_1 = document.createElement('div');
        inner_div_1.setAttribute('class','col-md-10');
        
        name = document.createElement('input');
        name.setAttribute('type','text');
        name.setAttribute('class','form-control');
        name.setAttribute('id','name');
        
        inner_div_1.appendChild(name);
        div_1.appendChild(label_1);
        div_1.appendChild(inner_div_1);
        form.appendChild(div_1);
        
        /***************** lastname ******************/
        
        const div_2 = document.createElement('div');
        div_2.setAttribute('class','form-group');
        
        const label_2 = document.createElement('label');
        label_2.innerHTML = 'Last Name';
        label_2.setAttribute('class','control-label col-md-2');
        label_2.setAttribute('for','lastname');
        
        const inner_div_2 = document.createElement('div');
        inner_div_2.setAttribute('class','col-md-10');
        
        lastName = document.createElement('input');
        lastName.setAttribute('type','text');
        lastName.setAttribute('class','form-control');
        lastName.setAttribute('id','lastname');
        
        inner_div_2.appendChild(lastName);
        div_2.appendChild(label_2);
        div_2.appendChild(inner_div_2);
        form.appendChild(div_2);
        
        /***************** email ******************/
        
        const div_3 = document.createElement('div');
        div_3.setAttribute('class','form-group');
        
        const label_3 = document.createElement('label');
        label_3.innerHTML = 'E-mail';
        label_3.setAttribute('class','control-label col-md-2');
        label_3.setAttribute('for','email');
        
        const inner_div_3 = document.createElement('div');
        inner_div_3.setAttribute('class','col-md-10');
        
        email = document.createElement('input');
        email.setAttribute('type','email');
        email.setAttribute('class','form-control');
        email.setAttribute('id','email');
        
        inner_div_3.appendChild(email);
        div_3.appendChild(label_3);
        div_3.appendChild(inner_div_3);
        form.appendChild(div_3);
        
        /************** profile picture ****************/
        
        const div_4 = document.createElement('div');
        div_4.setAttribute('class','form-group');
        
        const label_4 = document.createElement('label');
        label_4.innerHTML = 'Url for your profile picture';
        label_4.setAttribute('class','control-label col-md-2');
        label_4.setAttribute('for','picture');
        
        const inner_div_4 = document.createElement('div');
        inner_div_4.setAttribute('class','col-md-10');
        
        img = document.createElement('input');
        img.setAttribute('type','text');
        img.setAttribute('class','form-control');
        img.setAttribute('id','picture');
        
        inner_div_4.appendChild(img);
        div_4.appendChild(label_4);
        div_4.appendChild(inner_div_4);
        form.appendChild(div_4);
        
        /******************* skills *******************/
        
        const div_5 = document.createElement('div');
        div_5.setAttribute('class','form-group');
        
        const label_5 = document.createElement('label');
        label_5.innerHTML = 'Skills';
        label_5.setAttribute('class','control-label col-md-2');
        label_5.setAttribute('for','skills');
        
        const inner_div_5 = document.createElement('div');
        inner_div_5.setAttribute('class','col-md-10');
        
        skills = document.createElement('input');
        skills.setAttribute('type','text');
        skills.setAttribute('class','form-control');
        skills.setAttribute('id','skills');
        
        inner_div_5.appendChild(skills);
        div_5.appendChild(label_5);
        div_5.appendChild(inner_div_5);
        form.appendChild(div_5);
        
        /*********** form validation alert **********/
        
        const div_6 = document.createElement('div');
        div_6.setAttribute('class','form-group');
        div_6.setAttribute('class','col-md-offset-2 col-md-10');
        
        alertValidation = document.createElement('div');
        alertValidation.setAttribute('id','alertValidation');
        
        alertValidation.innerHTML = 'Make sure to have no empty fields, your e-mail is valid and skills are in comma separated order';
        div_6.appendChild(alertValidation);
        form.appendChild(div_6);
        
        /*************** save/cancel ****************/
        
        const div_7 = document.createElement('div');
        div_7.setAttribute('class','form-group');
        
        const inner_div_7 = document.createElement('div');
        inner_div_7.setAttribute('class','col-md-offset-2 col-md-10');
        
        btn_save = document.createElement('button');
        btn_save.setAttribute('type','submit');
        btn_save.setAttribute('class','btn btn-primary');
        btn_save.setAttribute('id','btn_save');
        btn_save.innerHTML = 'Save';
        
        
        btn_cancel = document.createElement('button');
        btn_cancel.setAttribute('type','reset');
        btn_cancel.setAttribute('class','btn btn-default');
        btn_cancel.setAttribute('id','btn_cancel');
        btn_cancel.innerHTML = 'Cancel';
        
        inner_div_7.appendChild(btn_save);
        inner_div_7.appendChild(btn_cancel);
        div_7.appendChild(inner_div_7);
        form.appendChild(div_7);
        
        /*******************************************/
        
        formDiv.appendChild(form);
        container.appendChild(formDiv);
        
    })();
    
    
    //function for creating table and rendering all content with event handlers while initialization
    (function (array){
        
        table = document.createElement('table');
        table.setAttribute('border', '1');
        thead = document.createElement('thead');
        htr = document.createElement('tr');
        
        htr.innerHTML = '<th>Name/Lastname <span id="nameSort" class="glyphicon glyphicon-sort" aria-hidden="true"></span> </th><th>Email <span id="emailSort" class="glyphicon glyphicon-sort" aria-hidden="true"></span> </th><th>Image</th><th>Skills <span id="skillsSort" class="glyphicon glyphicon-sort" aria-hidden="true"></span> </th><th>Edit/Remove</th>';
        
        thead.appendChild(htr);
        table.appendChild(thead);
        
        tbody = document.createElement('tbody');
        
        for(let i = 0; i < array.length; i++){
            let btr = document.createElement('tr');
            let current = array[i];
            btr.innerHTML= `<td>${current.name} ${current.lastName}</td>
                            <td>${current.email}</td>
                            <td><img src=${current.img} /></td>
                            <td>${current.skills}</td>
                            <td>
                                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </td>`;
            tbody.appendChild(btr);
        }
        
        table.appendChild(tbody);
        container.appendChild(table);
        
        nameSortHandler();
        emailSortHandler();
        skillsSortHandler();
        editHandler();
        removeHandler();
        
    })(students);
    
    /*
    function for checking if new element in form is valid:
     valid - we add the element to table and clear the form
     invalid - showing the alert message that something is not valid
     */
    document.getElementById('myForm').addEventListener('submit', function(e){
        e.preventDefault();
        
        if(formValidation()){
            
            alertValidation.style.visibility = 'hidden';
            alertValidation.style.height = '0px';
            
            students.push({
                name: name.value,
                lastName: lastName.value,
                email: email.value,
                img: img.value,
                skills: skills.value
            });
            
            btn_cancel.click();
            renderTableBody(students);
            
        }else{
            alertValidation.style.visibility = 'visible';
            alertValidation.style.height = 'auto';
        } 
    });
    
    /*
    validation function for checking:
     - empty strings
     - email validation
     - skills to be in proper order
     */
    function formValidation(){
        
        let valid = true;
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const skillsRegEx = /^(([a-z0-9\s]{1,30}([,])*)+)$/i;
        
        if(name.value === '' || lastName.value === '' || img.value === ''){
            valid = false;
        }else if(!emailRegEx.test(email.value)){
            valid = false;
        }else if(!skillsRegEx.test(skills.value)){
            valid = false;
        }
        
        return valid;
    };
    
    /*
    function for sorting table by name
    contain two nested functions which add functionality to sort button with two state cycle:
    first time click - ascending order
    second time click - descending order
    */
    function nameSortHandler(){
        
        const nameSort = document.getElementById('nameSort');
        nameSort.addEventListener('click', alphabetNameSort);
        
        function alphabetNameSort(){
            nameSort.removeAttribute('class');
            nameSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
            
            students.sort(function(a, b){
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;  
                if(a.name === b.name){
                    if(a.lastName < b.lastName) return -1;
                    if(a.lastName > b.lastName) return 1;
                }
                return 0;
            });
            
            renderTableBody(students);
            nameSort.removeEventListener('click', alphabetNameSort);
            nameSort.addEventListener('click', alphabetAltNameSort);
        }
        
        
        function alphabetAltNameSort(){
            nameSort.removeAttribute('class');
            nameSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet-alt');
            
            students.sort(function(a, b){
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;  
                if(a.name === b.name){
                    if(a.lastName < b.lastName) return 1;
                    if(a.lastName > b.lastName) return -1;
                }
                return 0;
            });
            
            renderTableBody(students);
            nameSort.removeEventListener('click', alphabetAltNameSort);
            nameSort.addEventListener('click', alphabetNameSort);
        }
    };
    
    /*
    function for sorting table by email
    contain two nested functions which add functionality to sort button with two state cycle:
    first time click - ascending order
    second time click - descending order
    */
    function emailSortHandler(){
        
        const emailSort = document.getElementById('emailSort');
        emailSort.addEventListener('click', alphabetEmailSort);
        
        function alphabetEmailSort(){
            emailSort.removeAttribute('class');
            emailSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
            
            students.sort(function(a, b){
                if (a.email < b.email) return -1;
                if (a.email > b.email) return 1;  
                return 0;
            });
            
            renderTableBody(students);
            emailSort.removeEventListener('click', alphabetEmailSort);
            emailSort.addEventListener('click', alphabetAltEmailSort);
        }
        
        
        function alphabetAltEmailSort(){
            emailSort.removeAttribute('class');
            emailSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet-alt');
            
            students.sort(function(a, b){
                if (a.email < b.email) return 1;
                if (a.email > b.email) return -1;  
                return 0;
            });
            
            renderTableBody(students);
            emailSort.removeEventListener('click', alphabetAltEmailSort);
            emailSort.addEventListener('click', alphabetEmailSort);
        }
    };
    
    /*
    function for sorting table by skills
    contain two nested functions which add functionality to sort button with two state cycle:
    first time click - ascending order
    second time click - descending order
    */
    function skillsSortHandler(){
        
        const skillsSort = document.getElementById('skillsSort');
        skillsSort.addEventListener('click', alphabetSkillsSort);
        
        function alphabetSkillsSort(){
            skillsSort.removeAttribute('class');
            skillsSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet');
            
            students.sort(function(a, b){
                if (a.skills < b.skills) return -1;
                if (a.skills > b.skills) return 1;  
                return 0;
            });
            
            renderTableBody(students);
            skillsSort.removeEventListener('click', alphabetSkillsSort);
            skillsSort.addEventListener('click', alphabetAltSkillsSort);
        }
        
        
        function alphabetAltSkillsSort(){
            skillsSort.removeAttribute('class');
            skillsSort.setAttribute('class', 'glyphicon glyphicon-sort-by-alphabet-alt');
            
            students.sort(function(a, b){
                if (a.skills < b.skills) return 1;
                if (a.skills > b.skills) return -1;  
                return 0;
            });
            
            renderTableBody(students);
            skillsSort.removeEventListener('click', alphabetAltSkillsSort);
            skillsSort.addEventListener('click', alphabetSkillsSort);
        }      
    };
    
    
    /*
    function for editing element in table
    while click it copy element information into the form
    save button - save element and clear the form 
    cancel button - clear the form and make no changes
    */
    function editHandler(){
        
        for (let i = 0; i < edit.length; i++) {
            edit[i].addEventListener('click', function(){
                particularEditHandler(i);
            });
        }
        
        function particularEditHandler(j){
            
            let current = students[j];
                
            name.value = current.name;
            lastName.value = current.lastName;
            email.value = current.email;
            img.value = current.img;
            skills.value = current.skills;

            btn_save.addEventListener('click', saveEditedStudent);

            function saveEditedStudent(e){
                e.preventDefault();

                if(formValidation()){
                    alertValidation.style.visibility = 'hidden';
                    alertValidation.style.height = '0px';

                    let editedData = {
                        name: name.value,
                        lastName: lastName.value,
                        email: email.value,
                        img: img.value,
                        skills: skills.value
                    }

                    students.splice(j, 1, editedData);

                    btn_cancel.click();

                    renderTableBody(students);

                    btn_save.removeEventListener('click', saveEditedStudent);
                }else{
                    alertValidation.style.visibility = 'visible';
                    alertValidation.style.height = 'auto';
                }
            }

            btn_cancel.addEventListener('click', function(){
                btn_save.removeEventListener('click', saveEditedStudent);
            });
        }
    };
    
    
    //function for removing elements
    function removeHandler(){
        for (let i = 0; i < trash.length; i++) {
            trash[i].addEventListener('click', function(){
                students.splice(i, 1);
                renderTableBody(students);
            });
        }
    };
    
    
    //function for alerting Student while clicking on:
    //Student, email, skills and edit/remove (exclude edit/remove buttons)
    tbody.addEventListener('click', function(e){
        const target = e.target.parentElement.childNodes[0].innerHTML;
        if(target){
            alert(target);
        }
    })
    
    
    //function for rendering table body according to given array
    function renderTableBody(array){
        tbody.innerHTML = '';
        
        for(let i = 0; i < array.length; i++){
            btr = document.createElement('tr');
            btr.innerHTML = `<td>${array[i].name} ${array[i].lastName}</td>
                             <td>${array[i].email}</td>
                             <td><img src=${array[i].img} /></td>
                             <td>${array[i].skills}</td>
                             <td>
                                 <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                                 <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                             </td>`;
            tbody.appendChild(btr);
        }
        
        editHandler();
        removeHandler();
    }
    
    
    
})();