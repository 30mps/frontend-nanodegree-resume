//$('#main').append('Smitha Menon');

var bioName = "Smitha Menon";
var role = "Web Developer";

var formattedName =  HTMLheaderName.replace('%data%',bioName);
var formattedRole =  HTMLheaderRole.replace('%data%',role);


var skills = ["html5","javascript","css","jquery","bootstrap","git","tcl","perl","python","Sql"];

var bio = {
	"name": bioName,
	"role": role,
	"contacts": {
		"mobile": "813-546-0492",
		"email": "spmenon30@gmail.com",
		"github": "30mps",
		"twitter": "spme30",
		"location": "Seattle"
	},
	"welcomeMessage": "Welcome to my page! While you are here  check my skills .",
	"skills": skills,
	"biopic": "images/smitha.jpg"
};

 //  Encapsulate display of bio object in a function taking no parameters
 bio.display = function() {

    // Used prepend method in this order to create the design as shown in the sample page
    $('#header').prepend(formattedRole);
 	$('#header').prepend(formattedName);

 	//Creating contaDetail string using generic HTML contact string from helper.js
    var contactDetail = "";
    for (var info in bio.contacts) {
    	var contact = HTMLcontactGeneric.replace('%contact%',info);
    	contactDetail = contactDetail + contact.replace('%data%',bio.contacts[info]);
    }

    //Adding contact information to top header
    $('#topContacts').append(contactDetail);
    //Adding contact information to bottom footer
    $('#footerContacts').append(contactDetail);

 	//Adding bio photo and welcome message to resume
	$('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));

     // Skill summary at a glance
    //Check if there are skills in the bio object
    if(bio.skills.length > 0) {
    	//append HTMLskillsstart declared in helper.js to the div with id=header
    	$('#header').append(HTMLskillsStart);

    	for (i=0; i < bio.skills.length; i++) {
    		// Use HTMLskills from helper.js to format each skill in a <li>
			var skillElement =  HTMLskills.replace('%data%',bio.skills[i]);
			// Append each formatted skill to the <ul> tag with id=header in the HTMLskillsStart variable
			$('#skills').append(skillElement);
		}



    }
};

bio.display();

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



education.display = function() {
	// for-in loop that iterates through all the schools and online courses in education object
	for(school in education.schools) {

		 // append a new HTMLschoolStart div from helper.js for each school
		 // create a new div with class education-entry for school attended
		 $('#education').append(HTMLschoolStart);

		 // format each schools's  name,degree, dates, loaction and major
	     var schoolName  = HTMLschoolName.replace('%data%',education.schools[school].name);
	     var schoolDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
	     var schoolDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
	     var schoolLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location)
         var schoolMajor = "";
         for (major in education.schools[school].majors) {
         	schoolMajor = HTMLschoolMajor.replace('%data%',education.schools[school].majors[major]);
         }
	     //append  concatenation of strings of schools's  name,degree, dates, loaction and major
	     $('.education-entry:last').append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor);

	}

	$('.education-entry:last').append(HTMLonlineClasses);

	// for-in loop that iterates through all th online courses
	for(course in education.onlineCourses) {

 		var onlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title);
 		var onlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school);
 		var onlineDate = HTMLonlineDates.replace('%data%',education.onlineCourses[course].date);
		var onlineUrl = HTMLonlineURL.replace('%data%',education.onlineCourses[course].url) ;
		$('.education-entry:last').append(onlineTitle + onlineSchool + onlineDate + onlineUrl);
	};

};

education.display();

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


//Work experience display: function taking no parameters
work.display = function() {

	// for-in loop that iterates through all the jobs in work object
	for(job in work.jobs) {

		 // append a new HTMLworkStart  div from helper.js for each job
		 // create a new div with class work-entry for work experience
		 $('#workExperience').append(HTMLworkStart);

		 // format each job's employer an title with HTMLworkEmployer and HTMLworkTitle respectively
	     var emp  = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
	     var workTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title)

	     // format each job's employer an title with HTMLworkDates and HTMLworkDescription respectively
	     var workDate = HTMLworkDates.replace('%data%',work.jobs[job].dates);
	     var workDesc = HTMLworkDescription.replace('%data%',work.jobs[job].description)

	     //append  concatenation of employee , workTitle, workDate and WorkDesc for each job to the last element in class work-entry
	     $('.work-entry:last').append(emp + workTitle + workDate + workDesc);

	}
};

// Invoke function to display work experience on resume page
work.display();

var projects =  [{
 	"title": "AWCPS mockup pages",
 	"dates": "2015",
 	"description": "Created mockup pages for AWCPS",
 	"images": ["http://spinsight.github.io/awcps/index-test.html" , "http://spinsight.github.io/awcps/home.html"],
 }, {
 	"title": "Portfolio Site",
 	"dates": "2015",
 	"description": "A mockup responsive website that will display images, descriptions and links to portfolio projects.",
 	"images": ["http://30mps.github.io/portfolio-site/"],
 }
];

/*, {
 	"title": "",
 	"dates": "",
 	"description": "",
 	"images": [""]
 } */

// Encapsulate display within the projects object
projects.display  = function() {

	for (var project in projects)  {

		// the dispaly function is the 3rd element in the projects and the for loop was iterating through it to give an undefined element. So put the if condition to check if the title exists
		if (projects[project].title != undefined) {

			// append a new HTMLprojectStart object from helper.js for each project
	   // create a new div with class project-entry for each project
		$("#projects").append(HTMLprojectStart);

		// format each projects's title with HTMLprojectEmployer , dates HTMLprojectDates , description with HTMLprojectDescription and images with HTMLprojectImages
			var pTitle = HTMLprojectTitle.replace('%data%',projects[project].title);
			var pDates = HTMLprojectDates.replace('%data%',projects[project].dates);
			var pDesc = HTMLprojectDescription.replace('%data%',projects[project].description);

			//TODO - put actual images in the array
			// Looping through the images array.
			var pImg = "";
			for(j=0 ; j < projects[project].images.length; j++) {
				// concatenating the formatted images
				pImg = pImg + HTMLprojectImage.replace('%data%',projects[project].images[j]);
			}

			$('.project-entry:last').append(pTitle + pDates + pDesc + pImg);
		}
	}
};

projects.display();

//Include interactive google map
$('#mapDiv').append(googleMap);

