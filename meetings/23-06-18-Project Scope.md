	#23-06-18-Project Scope day
	#Parties included: Founders, PM
	#Input: Project Charter
	#Expected output: Project Scope

REASON OF THIS DOCUMENT: work that must be performed to deliver a product and also work that is out of this project, should be more deeper than the Project Charter

**Overview of the Project**

 * Application for helping group of friend select sightseeing’s spots which are interesting for most of them (without fighting)

**Project Objective and Scope Objective**

 * Q3 of 2018
   * having collection of 250 images with geo data for every country with more than 50,000 squared km or more than 1,000,000 annual visitors 
   * raw images stored in filesystem, meta-information of images stored in NoSQL database
 * Q3 of 2018
   * contract with at least 10 hotels in each country (from the list above)
   * provide them a direct booking from our site or referal links to their pages
 * Q4 of 2018 
   * having contract with flight provider to show possibility to provide our service after booking a flight to some country
   * main partner should be Kiwi.com, Skyscanner, Ryanair, Wizzair or other low-budget airline
 * End of 2018
   * functional web based on Amazon service with basic features 
     * using ReactJS for front-end and Flask for back-end
     * log in/register screen
     * create group feature
     * generate link for other members
     * showing images of places on the Google Maps
 * Q1 of 2019
   * feature of planning route based on selected places
   * the route will be shown on the Google Maps
 * Q2 of 2019 
   * native Android/iOS app
   * same functionality like web app


**Acceptance criteria**

 * Web which will be stable enough to perform all test user stories
 * Mobile applicaton will be stable enough to perform all test user stories
 * Advertisement with documented reach for 50,000 user per month
 * At least 1,000 unique monthly active users 
 * Documented code (documentation for every part of code excluded 20 lines)

**Deliverables** (for detailed information see **Project Objective and Scope Objective**)

 * Web application (RectJS, Flask, graphics)
 * Mobile application (native Android/iOS code, graphics, store account)
 * Policies of operations, marketing and development teams
 * Image databases (NoSQL)
 * Policies with hotels and flight seller 
 * Graphics and material for advertisement (accounts, images, videos, credential for pages ...)
 * Documented algorithms for calculating route based on images preferences

**Project Exclusions** (but nice to have)

 * Licence agreement for images usage
 * Contracts with hotels and flight sellers 
 * Own dedicated server
 * Speed and workload gurantee
 * Database of users previous trip suggestions

**Assumptions**

 * Experienced programming and management team
 * Experience with technology
 * No direct competition
 * Hotels will be attracted by offer to promote them
   * With enough MAU (Monthly active user)
 * Friend will want to cooperate and there won’t be any sabotage from their side
   * They want to have nice holiday
 * No sabotage from side of image and map provider (change of API, licence war ...)
   * Choose big enough companies

**Constraints**

 * There cannot be less than 1 and more than 10 people in one group
   * Bigger group would need more computer power - need to buy more computer power
   * More users will be available for special fee -> for universities and schools
 * Route will be based on data from Google Maps (no assurance about correctness)
   * Curated map layer from OpenStreetMap - need another person to check route and corrent then based on reported problems
   * Own dealing with data to store the map
 * Link to join a group will be valid for certain amount of time
   * Need to big amount of space to save for unlimited time (can be done)

Project Scope Acceptance

 * Petr Lorenc, Petr Lorenc, Petr Lorenc Signatures

