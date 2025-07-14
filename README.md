# MrTourguide
Title: 
    Mixed Reality Based Mapping Platform for Cultural Heritage and Tourism Sites in Nasugbu, Batangas

Members: 
  Jonson, Francine Yzabel L.
  Bilugan, Piere Paolo B.
  Romero, Ian Vince A. 

Introduction:
    Mr. TourGuide is a web-based mixed-reality platform designed to showcase the cultural and historical landmarks of Nasugbu. It allows users to virtually tour heritage sites via interactive 3D avatars and multimedia content, providing an immersive and educational         tourism experience accessible through standard web browsers.

Purpose/Scope:
    The system is designed to provide a web-based 3D virtual tour experience that showcases culturally significant heritage sites in Nasugbu, Batangas through immersive digital storytelling. By integrating photogrammetry-based 3D reconstructions with animated virtual        tour guides, the platform aims to increase accessibility, awareness, and appreciation of local heritage.
    
- Promote cultural preservation through accurate digital documentation of heritage landmarks
- Provide an engaging and educational experience for users via immersive virtual environments
- Demonstrate the potential of mixed reality technologies in tourism and heritage interpretation
- Offer a lightweight, browser-accessible alternative to physical site visits for educational, research, or promotional use
- All features and system functionalities are developed in alignment with the broader goal of supporting sustainable tourism and cultural education through emerging digital tools.

Defintion of Terms:
- MR (Mixed Reality): Technology that blends digital content with the real world. Used here to enhance virtual tours of heritage sites.
- VR (Virtual Reality): Fully immersive digital environment. Enables users to explore Nasugbu’s cultural sites in 3D.
- AR (Augmented Reality): Overlays digital elements onto the real world. Considered for future development of the platform. 
- 3D Models: Digital replicas of real-world objects. Created using photogrammetry to represent heritage sites.
- Photogrammetry: Technique for generating 3D models from photographs. Ensures accuracy in visual reconstructions.
- Cultural Heritage Sites: Historically or culturally important places featured in the virtual tour.
- Tourism Destinations: Sites in Nasugbu promoted for cultural tourism through the platform.
- Digital Preservation: Use of digital tools to conserve and document heritage sites.

System Architecture


<img width="858" height="458" alt="image" src="https://github.com/user-attachments/assets/18acd76d-b069-4182-adb9-d0d78fd8932f" />

The system architecture of Mr. TourGuide follows a client-server model, optimized for web-based deployment. It consists of several key components:
- Data Collection Layer: Cultural heritage sites are captured using drones and cameras. These images are processed using photogrammetry tools like RealityCapture and refined in Blender to create accurate 3D models.
- Admin Interface: Administrators manage and upload 3D models to the platform. They ensure content accuracy, update scene data, and maintain the system.
- Web Server: Hosts the platform, delivering static 3D assets and interactive content. It ensures smooth access and asset streaming across devices.
- User Interface: End-users access the platform via desktop or mobile browsers. The UI is developed using React and Three.js, enabling interactive 3D exploration of heritage sites.
- Virtual Environment: The core experience where users view photorealistic 3D landmarks and interact with animated virtual tour guides that narrate site-specific information.

The platform is a web-based system, accessible through any modern browser without installation. It is designed to be lightweight and device-independent, relying solely on frontend technologies.
Core Software Components:
React: Handles dynamic UI elements and state control
Three.js: Renders 3D environments and handles model interaction
.glb 3D Models: Pre-optimized for fast loading and performance
Audio/Subtitle Syncing: Supports narrated virtual tours and accessibility options

Key Functions:
Load and display 3D cultural sites
Trigger virtual guide animations with synchronized narration
Provide basic camera controls (rotate, pan, zoom)
Toggle viewing modes (orbit view or walk-through view)

Actors:
User (Visitor/Explorer):

Selects and explores cultural heritage sites
Interacts with 3D models (zoom, rotate, view narration)
Engages with virtual tour guides

Admin:
Uploads and manages 3D site models
Updates content and ensures accuracy
Maintains usability and system integrity

Use Case: Explore Heritage Site
Precondition: User opens the platform via a browser

Flow:
User selects a heritage site
3D model loads in the viewer
Tour guide appears and narrates site history
User controls camera to explore site
Postcondition: User finishes tour and can navigate to another site

Type	Description
Technical - Requires a WebGL-compatible browser and internet connection
Performance - 3D models must be optimized to load under 5 seconds with smooth frame rates
Device Limit - Older or low-spec devices may experience slow rendering or failed model loads
Offline Access - Not currently supported; depends on future PWA implementation
Scalability	- System must allow easy addition of new 3D scenes or landmarks in future

Load 3D Environment - Displays the 3D heritage site scene when the user selects a location.
Virtual Tour Guide - Triggers an animated avatar that provides audio and/or text-based narration.
Camera Controls	- Allows user to rotate, zoom, and pan the view of the 3D scene.

The Mr. TourGuide platform uses a clean and responsive web interface accessible via desktop and mobile browsers. The interface is designed to be intuitive and user-friendly, presenting cultural sites through an engaging virtual experience.

Main User Interface Components:
Component	Description
Title/Header	
- Displays the name of the system: Mr. TourGuide – Nasugbu Heritage Virtual Tour. Positioned at the top of the page.
Site Cards
- Interactive cards showcasing the available cultural heritage sites. Each card includes a thumbnail, title, and a "Start Tour" button that loads the 3D scene.
3D Viewer Area
- Displays the selected 3D model using Three.js. Includes controls for rotate, zoom, pan, and interaction with the virtual guide.
Team Section
- Lists the members of the project development team, their roles, and affiliation with Batangas State University.
Objective Section
- A brief description of the system’s goal: to promote cultural heritage preservation and virtual tourism in Nasugbu. Shown on the homepage or as an about/info section.

Area	Requirement
3D Model Optimization	
- All .glb models must be decimated and compressed to ensure smooth WebGL rendering.
Hosting Environment
- Platform will be hosted on a reliable cloud service (www.mrtourguide.com.ph).
Cultural Accuracy
- Content must be validated by local historians, LGUs, or cultural experts.
Offline Version (Future)
- Future development may include a Progressive Web App (PWA) for offline exploration.
AR/VR
- Explore integration of Augmented and Virtual Reality for real-world overlay and immersive headset support.
