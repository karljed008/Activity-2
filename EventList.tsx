import './EventList.css'



function EventList() {
    return (
       <>
          <h1>Welcome to Event Planner</h1>
          <h2>Plan and organize your events effortlessly with
            Event Planner.From Birthdaysw to corporate meetings,we've got you covered.
          </h2>

          <button>Get Started</button>

       <section className = "events_categories">

          <ul>
               <h3>Event List</h3>
               <li>Event 1: Birthday Party</li>
               <li>Event 2: Wedding</li>
               <li>Event 3: Corporate Meeting</li>
               <li>Event 4: Conference</li>
          </ul>
             <ul>
               <h3>Event List</h3>
               <li>Event 1: Birthday Party</li>
               <li>Event 2: Wedding</li>
               <li>Event 3: Corporate Meeting</li>
               <li>Event 4: Conference</li>
          </ul>
           <ul>
               <h3>Event List</h3>
               <li>Event 1: Birthday Party</li>
               <li>Event 2: Wedding</li>
               <li>Event 3: Corporate Meeting</li>
               <li>Event 4: Conference</li>
          </ul>
        
       </section>
          
          <h1>Features</h1>
          <p>Easy event creation and management</p>
          <p>Customizable event templates</p>
          <p>Guest list Management</p>
          <p>Real-time collaboration</p>
          <p>Reminders and notifications</p>
          
          <h1>Testimonials</h1>
          <p>"Event Planner made  organizzing my wedding a breeze.Highly Recommended!"</p>
          <h4>-Emily Johnson</h4>

          <p>"I use event planner forn all my corporate events. It saves me so miuch time and effort!"</p>
          <h4>-John Smith</h4>
          
          <h1>Contact Us</h1>
<form className="contact-form">
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <br />
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <br />
  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>
  <br />
  <button type="submit">Send Message</button>
</form>

       </>
       

    );
}

export default EventList;