
       //For easier reference Storing %data% and the $('#header) jquery object in variables
       var data = '%data%';
       var $header = $('#header');


        // bio object
        var bio = {
            "name": "Smitha Menon",
            "role": "Web Developer",
            "contacts": {
                "mobile": "813-546-0493",
                "email": "spmenon30@gmail.com",
                "github": "30mps",
                "twitter": "spme30",
                "location": "Seattle"
            },
            "welcomeMessage": "Multi-skilled Web Application Developer.",
            "skills": ["html5","javascript","css","jquery","bootstrap","git","tcl","perl","python","Sql"],
            "biopic": "images/smitha.jpg"
        };

        //Setting the property in the bio object using the html strings defined in helper.js
        bio.name =  HTMLheaderName.replace(data,bio.name);
        bio.role =  HTMLheaderRole.replace(data,bio.role);
        bio.contacts.mobile = HTMLmobile.replace(data,bio.contacts.mobile);
        bio.contacts.email = HTMLemail.replace(data,bio.contacts.email);
        bio.contacts.twitter = HTMLtwitter.replace(data,bio.contacts.twitter);
        bio.contacts.github = HTMLgithub.replace(data,bio.contacts.github);
        bio.contacts.location = HTMLlocation.replace(data,bio.contacts.location);


         //Encapsulate display of bio object in a function taking no parameters
         bio.display = function() {

            // Used prepend method in this order to create the design as shown in the sample page
            $header.prepend(bio.role);
            $header.prepend(bio.name);

            //Creating contaDetail string using generic HTML contact string from helper.js
            var contactDetail = "";
            for (var info in bio.contacts) {
                //commenting the generic HTML contact and using the formatted variables described above.
                //Added font awesome to formatted html
               // var contact = HTMLcontactGeneric.replace('%contact%',info);
               // contactDetail = contactDetail + contact.replace(data,bio.contacts[info]);
                contactDetail = contactDetail + bio.contacts[info] ;

            }

            //Adding contact information to top header
            $('#topContacts').append(contactDetail);
            //Adding contact information to bottom footer
            $('#footerContacts').append(contactDetail);

            //Adding bio photo and welcome message to resume
            $header.append(HTMLbioPic.replace(data,bio.biopic));
            $header.append(HTMLwelcomeMsg.replace(data,bio.welcomeMessage));

             // Skill summary at a glance
            //Check if there are skills in the bio object
            if(bio.skills.length > 0) {
                //append HTMLskillsstart declared in helper.js to the div with id=header
                $header.append(HTMLskillsStart);

                for (var i=0; i < bio.skills.length; i++) {
                    // Use HTMLskills from helper.js to format each skill in a <li>
                    var skillElement =  HTMLskills.replace(data,bio.skills[i]);
                    // Append each formatted skill to the <ul> tag with id=header in the HTMLskillsStart variable
                    $('#skills').append(skillElement);
                }
            }
        };

        bio.display();

        // education object
         var education = {
            "schools": [{
                "name": "University of Washington Professional and Continuing Education",
                "location": "Seattle, WA",
                "degree": "Certificate",
                "majors": ["Cloud Data Management & Analytics"],
                "dates": "2014",
                "url": "http://www.pce.uw.edu/certificates/cloud-data-management-analytics.html"
            }, {
                "name": "Bellevue College",
                "location": "Bellevue, WA",
                "degree": "Certificate",
                "majors": ["Business Intelligence Developer Certificate"],
                "dates": "2011",
                "url": "http://www.bellevuecollege.edu/programs/degrees/proftech/busit/"
            }, {
                "name": "Center for Development of Advanced Computing",
                "location": "Karad, India",
                "degree": "Diploma",
                "majors": ["Diploma in Advanced Computing"],
                "dates": "1999",
                "url": "http://cdac.in/index.aspx?id=DAC&courseid=0"
            }, {
                "name": "University of Pune",
                "location": "Pune",
                "degree": "Bachelors in Engineering",
                "majors": ["Electronics and Telecommunication"],
                "dates": "1998",
                "url": "http://cumminscollege.org/about-engineering-college/engineering-college/"
            }],
            "onlineCourses": [{
                "title": "Nanodegree Front End Web Developer",
                "school": "Udacity",
                "date": "Current",
                "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
            }, {
                "title": "How to Use Git and GitHub",
                "school": "Udacity",
                "date": "2015",
                "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
            }]
        };

        // education object display method
        education.display = function() {
            // forEach loop that iterates through all the schools array in education object
             education.schools.forEach(function(school) {

                 // append a new HTMLschoolStart div from helper.js for each school
                 // create a new div with class education-entry for school attended
                 $('#education').append(HTMLschoolStart);

                 // format each schools's  name,degree, dates, loaction and major
                 var schoolName  = HTMLschoolName.replace(data,school.name);
                 var schoolDegree = HTMLschoolDegree.replace(data,school.degree);
                 var schoolDates = HTMLschoolDates.replace(data,school.dates);
                 var schoolLocation = HTMLschoolLocation.replace(data,school.location)
                 var schoolMajor = "";

                 //Looping through the education majors array using forEach
                 school.majors.forEach(function(major) {
                    schoolMajor = HTMLschoolMajor.replace(data,major);
                 });

                 //append  concatenation of strings of schools's  name,degree, dates, loaction and major
                 $('.education-entry:last').append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor);

            });

            $('.education-entry:last').append(HTMLonlineClasses);

            // forEach loop that iterates through all th online courses array
            education.onlineCourses.forEach(function(course) {
                var onlineTitle = HTMLonlineTitle.replace(data,course.title);
                var onlineSchool = HTMLonlineSchool.replace(data,course.school);
                var onlineDate = HTMLonlineDates.replace(data,course.date);
                var onlineUrl = HTMLonlineURL.replace(data,course.url) ;
                $('.education-entry:last').append(onlineTitle + onlineSchool + onlineDate + onlineUrl);
            });

        };

        education.display();

        // work object
        var work = {
            "jobs": [{
                "employer": "AWCPS",
                "title": "Webmaster",
                "location": "Bellevue, WA",
                "dates": "October 2015 - Current",
                "description": "Understand requirements for AWC web presence and social media outreach, review current strategy and chart alternate strategy recommendation based on AWC requirements. "
            }, {
                "employer": "University of Washington",
                "title": "Teaching/Lab Assistant, Continuing Education",
                "location": "Seattle, WA",
                "dates": "May 2015 - Current",
                "description": "Teaching Assistant for the multiple UW courses: 'HTML5, CSS3 & Responsive Design for Web Development' and 'Supporting Scalable Analytics in Cloud'.  Responsible for managing online student interactions during class, assisting the professor in evaluating assignments, setting up and conducting online lecture sessions in coordination with facilities, and helping students troubleshoot issues with courseware."
            }, {
                "employer": "Netcore Solutions",
                "title": "Project Lead",
                "location": "Mumbai, India",
                "dates": "Feb 2005 - June 2006",
                "description": "Led software development lifecycle for an in-house mobile CMS (content management) site. Managed stakehol ders, development team, product roadmap and delivered software releases. Advocated open source web technologies for building the product. Performed requirement analysis, prototyping, effort estimation, usability design and data modeling for product. "
            }, {
                "employer": "Softcell Technologies",
                "title": "Software Engineer",
                "location": "Pune, India",
                "dates": "Sep 2002 - Nov 2003",
                "description": "Transitioned paper-based work flow and inventory management to an automated web-based business process with security roles, permissions, workflows and email activity alerts. Responsible for documenting requirements, project scope, schedules, database design and technology implementation using - Java, JDBC, JSP, JavaScript, HTML, Oracle 9i, Apache on Linux systems. "
            }, {
                "employer": "Thinking Minds Inc.",
                "title": "Software Engineer",
                "location": "Nashik, India",
                "dates": "Jan 2000 - Sep 2002",
                "description": "Built custom reports for student administration for University of Rhode Island using Peoplecode and PeopleSoft Designer.  Built system to boost search engine rankings using doorway pages. Built company website using -- TCL, Oracle, ACS Web Framework. "
            }]
        };


        //Work experience display method: function taking no parameters
        work.display = function() {

            // forEach loop that iterates through all the jobs array in work object
            work.jobs.forEach(function(job) {

                 // append a new HTMLworkStart  div from helper.js for each job
                 // create a new div with class work-entry for work experience
                 $('#workExperience').append(HTMLworkStart);

                 // format each job's employer an title with HTMLworkEmployer and HTMLworkTitle respectively
                 var emp  = HTMLworkEmployer.replace(data,job.employer);
                 var workTitle = HTMLworkTitle.replace(data,job.title)

                 // format each job's employer an title with HTMLworkDates and HTMLworkDescription respectively
                 var workDate = HTMLworkDates.replace(data,job.dates);
                 var workDesc = HTMLworkDescription.replace(data,job.description)

                 //append  concatenation of employee , workTitle, workDate and WorkDesc for each job to the last element in class work-entry
                 $('.work-entry:last').append(emp + workTitle + workDate + workDesc);

            });
        };

        // Invoke function to display work experience on resume page
        work.display();

        //projects object
        var projects =  {
            "projects": [{
            "title": "AWCPS mockup pages",
            "dates": "2015",
            "description": "Created mockup pages for AWCPS",
            "images": ["images/awcps1.png" , "images/awcps2.png"],
         }, {
            "title": "Portfolio Site",
            "dates": "2015",
            "description": "A mockup responsive website that will display images, descriptions and links to portfolio projects.",
            "images": ["images/portfolio.png"],
         }]
    };

        // Encapsulate display within the projects object
        projects.display  = function() {

            projects.projects.forEach(function(project) {
                // the dispaly function is the 3rd element in the projects and the for loop was iterating through it to give an undefined element. So put the if condition to check if the title exists
                if (project.title != undefined) {
                    // append a new HTMLprojectStart object from helper.js for each project

                   // create a new div with class project-entry for each project
                    $("#projects").append(HTMLprojectStart);

                    // format each projects's title with HTMLprojectEmployer , dates HTMLprojectDates , description with HTMLprojectDescription and images with HTMLprojectImages
                    var pTitle = HTMLprojectTitle.replace(data,project.title);
                    var pDates = HTMLprojectDates.replace(data,project.dates);
                    var pDesc = HTMLprojectDescription.replace(data,project.description);

                    // Looping through the images array.
                    var pImg = "";
                    for(var j=0 ; j < project.images.length; j++) {
                        // concatenating the formatted images
                        pImg = pImg + HTMLprojectImage.replace(data,project.images[j]);
                    }

                    $('.project-entry:last').append(pTitle + pDates + pDesc + pImg);
                }
            });
        };

        projects.display();

        //Include interactive google map
        $('#mapDiv').append(googleMap);

