import PageTitle from "../components/PageTitle";

const courses = [
  ["ITIS", "3135", "Front-End App development", "Required and fun class."],
  ["ITSC", "2181", "Intro to Computer Systems", "Required and interesting class"],
  ["ITSC", "3160", "Database Design & Implementation", "Required and relative elective."],
  ["STAT", "2122", "Intro to Probability and Stat", "Required class."],
];

const links = [
  ["Personal Home Page", "https://matthewbridges34.github.io/"],
  ["Introduction Page", "https://matthewbridges34.github.io/introduction.html"],
  ["ITIS 3135 Home", "https://matthewbridges34.github.io/itis3135/"],
  ["UNC Charlotte", "https://www.charlotte.edu/"],
  ["Heritage Foundation", "https://www.heritage.org/"],
];

export default function IntroductionForm() {
  return (
    <>
      <PageTitle title="Introduction Form | Matthew Bridges" />
      <h2 id="page-heading">Introduction Form</h2>
      <h3>Please submit the form below.</h3>
      <p className="readonly-note">This React conversion preserves the original form content and layout. You can add interactivity later after the pages match visually.</p>
      <section id="form-panel">
        <form id="intro-form">
          <fieldset>
            <legend>Name and Mascot</legend>
            <label htmlFor="first-name">First Name *</label>
            <input id="first-name" name="firstName" type="text" placeholder="Enter first name" required defaultValue="Matthew" />
            <label htmlFor="middle-name">Middle Name / Initial</label>
            <input id="middle-name" name="middleName" type="text" placeholder="Enter middle name or initial" defaultValue="" />
            <label htmlFor="preferred-name">Nickname / Preferred Name</label>
            <input id="preferred-name" name="preferredName" type="text" placeholder="Enter nickname or preferred name" defaultValue="" />
            <label htmlFor="last-name">Last Name *</label>
            <input id="last-name" name="lastName" type="text" placeholder="Enter last name" required defaultValue="Bridges" />
            <label htmlFor="mascot-adjective">Mascot Adjective *</label>
            <input id="mascot-adjective" name="mascotAdjective" type="text" placeholder="Enter mascot adjective" required defaultValue="Determined" />
            <label htmlFor="mascot-animal">Mascot Animal *</label>
            <input id="mascot-animal" name="mascotAnimal" type="text" placeholder="Enter mascot animal" required defaultValue="49er" />
            <label htmlFor="divider">Divider *</label>
            <input className="short-input" id="divider" name="divider" type="text" placeholder="Example: ~ or | or ♥" required defaultValue="|" />
          </fieldset>

          <fieldset>
            <legend>Acknowledgment</legend>
            <label htmlFor="acknowledgment-statement">Acknowledgment Statement *</label>
            <textarea id="acknowledgment-statement" name="acknowledgmentStatement" placeholder="Enter acknowledgment statement" required defaultValue="I understand that the content on this page is my own and is provided for this course assignment." />
            <label htmlFor="acknowledgment-date">Acknowledgment Date *</label>
            <input className="short-input" id="acknowledgment-date" name="acknowledgmentDate" type="date" required defaultValue="2026-03-22" />
          </fieldset>

          <fieldset>
            <legend>Picture</legend>
            <label htmlFor="picture">Upload a Picture</label>
            <input id="picture" name="picture" type="file" accept="image/*" />
            <figure>
              <img id="image-preview" src="/assets/images/myself.jpg" alt="Picture of Matthew Bridges in the Metro" />
              <figcaption>Picture of myself in the Metro.</figcaption>
            </figure>
            <label htmlFor="picture-caption">Picture Caption *</label>
            <input id="picture-caption" name="pictureCaption" type="text" placeholder="Enter picture caption" required defaultValue="Picture of myself in the Metro." />
          </fieldset>

          <fieldset>
            <legend>Introduction Content</legend>
            <label htmlFor="personal-statement">Personal Statement *</label>
            <textarea id="personal-statement" name="personalStatement" required defaultValue="I'm currently a rising senior at UNC Charlotte studying Computer Science with a focus in Cybersecurity. This is one of my first times working with HTML conventionally." />
            <label htmlFor="personal-background">Personal Background *</label>
            <textarea id="personal-background" name="personalBackground" required defaultValue="I’m a 22-year-old college student. I like to explore places, take photos, and play video games in my free time." />
            <label htmlFor="professional-background">Professional Background *</label>
            <textarea id="professional-background" name="professionalBackground" required defaultValue="After a full-time semester during the start of my junior year of college, I managed to settle a paid internship over the summer with The Heritage Foundation." />
            <label htmlFor="academic-background">Academic Background *</label>
            <textarea id="academic-background" name="academicBackground" required defaultValue="I’m currently a junior at UNC Charlotte studying computer science with a focus on Cyber Security. I am formerly a student from Texas State University." />
            <label htmlFor="subject-background">Background in This Subject *</label>
            <textarea id="subject-background" name="subjectBackground" required defaultValue="Crudely formed websites with a team of students while helping a church for a high school graduation project during my senior year. But beyond the severe help of my team, that is the most of my skills, otherwise I am excited to learn." />
            <label htmlFor="primary-computer">Primary Computer Platform *</label>
            <textarea id="primary-computer" name="primaryComputer" required defaultValue="Windows laptop" />
            <label htmlFor="funny-thing">Funny Thing</label>
            <textarea id="funny-thing" name="funnyThing" defaultValue="" />
            <label htmlFor="share-more">Something I'd Like to Share</label>
            <textarea id="share-more" name="shareMore" defaultValue="I drove cross country by myself a year ago." />
          </fieldset>

          <fieldset>
            <legend>Courses I’m Taking &amp; Why</legend>
            <div id="courses-container">
              {courses.map(([dept, number, name, reason], index) => (
                <div className="course-block" key={index}>
                  <hr />
                  <label>Department *</label>
                  <input className="course-department" type="text" required defaultValue={dept} />
                  <label>Number *</label>
                  <input className="course-number" type="text" required defaultValue={number} />
                  <label>Name *</label>
                  <input className="course-name" type="text" required defaultValue={name} />
                  <label>Reason *</label>
                  <textarea className="course-reason" required defaultValue={reason} />
                  <button type="button">Delete Course</button>
                </div>
              ))}
            </div>
            <button id="add-course" type="button">Add Course</button>
          </fieldset>

          <fieldset>
            <legend>Quote and Links</legend>
            <label htmlFor="quote">Quote *</label>
            <textarea id="quote" name="quote" required defaultValue="Appear weak when you are strong, appear strong when you are weak." />
            <label htmlFor="quote-author">Quote Author *</label>
            <input id="quote-author" name="quoteAuthor" type="text" required defaultValue="Sun Tzu, The Art of War" />
            <div id="links-container">
              {links.map(([label, href], index) => (
                <div className="link-block" key={index}>
                  <hr />
                  <label>Link {index + 1} Name *</label>
                  <input className="link-name" type="text" required defaultValue={label} />
                  <label>Link {index + 1} URL *</label>
                  <input className="link-href" type="url" required defaultValue={href} />
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Form Actions</legend>
            <div className="button-row">
              <button type="submit">Submit</button>
              <button id="reset-form" type="reset">Reset</button>
              <button id="clear-form" type="button">Clear</button>
              <button id="generate-json" type="button">Generate JSON</button>
              <button id="generate-html" type="button">Generate HTML</button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
