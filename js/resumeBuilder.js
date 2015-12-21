//$('#main').append('Smitha Menon');

var bioName = "Smitha Menon";
var role = "Web Developer";

var formattedName =  HTMLheaderName.replace('%data%',bioName);
var formattedRole =  HTMLheaderRole.replace('%data%',role);

$('#header').prepend(formattedName);
$('#header').append(formattedRole);

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
      //     display: function taking no parameters



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

                  //display: function taking no parameters}]

var work = {
	"jobs": [{
		"employer": "AWCPS",
		"title": "Webmaster",
		"location": "Telecommute",
		"dates": "October 2015 - Current",
		"description": "Understand requirements for AWC web presence and social media outreach, review current strategy and chart alternate strategy recommendation based on AWC requirements. "
	}, {
		"employer": "University of Washington, Continuing Education",
		"title": "Teaching/Lab Assistant",
		"location": "Seattle",
		"dates": "May 2015 - Current",
		"description": "Teaching Assistant for the multiple UW courses: 'HTML5, CSS3 & Responsive Design for Web Development' and 'Supporting Scalable Analytics in Cloud'.  Responsible for managing online student interactions during class, assisting the professor in evaluating assignments, setting up and conducting online lecture sessions in coordination with facilities, and helping students troubleshoot issues with courseware."
	}, {
		"employer": "Netcore Solutions",
		"title": "Project Lead",
		"location": "Mumbai",
		"dates": "Feb 2005 - June 2006",
		"description": "Led software development lifecycle for an in-house mobile CMS (content management) site. Managed stakehol ders, development team, product roadmap and delivered software releases. Advocated open source web technologies for building the product. Performed requirement analysis, prototyping, effort estimation, usability design and data modeling for product. "
	}, {
		"employer": "Softcell Technologies",
		"title": "Software Engineer",
		"location": "Pune",
		"dates": "Sep 2002 - Nov 2003",
		"description": "Transitioned paper-based work flow and inventory management to an automated web-based business process with security roles, permissions, workflows and email activity alerts. Responsible for documenting requirements, project scope, schedules, database design and technology implementation using - Java, JDBC, JSP, JavaScript, HTML, Oracle 9i, Apache on Linux systems. "
	}, {
		"employer": "Thinking Minds Inc.",
		"title": "Software Engineer",
		"location": "Nashik",
		"dates": "Jan 2000 - Sep 2002",
		"description": "Built custom reports for student administration for University of Rhode Island using Peoplecode and PeopleSoft Designer.  Built system to boost search engine rankings using doorway pages. Built company website using -- TCL, Oracle, ACS Web Framework. "
	}]
};

//	display: function taking no parameters


//$('#main').append(bio.name);


