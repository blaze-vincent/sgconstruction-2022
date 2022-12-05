<hgroup>
  <h1>SG Construction Company Website</h1>
  <h2>Recreated 2022</h2>
 </hgroup>
<article>
  <section>
    <p>
      This is the Nextjs recreation of the formerly Concrete5-generated <a href='https://sgconstructco.com'>
      sgconstructco.com</a> website. The website is not served by a Nextjs server; this version of the website 
      was designed to be exported statically. As such, 
      <a href='https://nextjs.org/docs/advanced-features/static-html-export'>unsupported features</a> like 
      &lt;Image&gt; optimization are not utilized.
    </p>
  </section>
  <section>
    <h3>Improvements Over the Previous Version</h3>
    <ul>
      <li>Utilizes vector graphics for logos and badges</li>
      <li>Utilizes semantic markup (previous iteration existed in div hell)</li>
      <li>Design has undergone revision</li>
      <li>Static export doesn't rely on server for purposes beyond serving files
        <ul>
          <li>As a result, Projects page actually works</li>
        </ul>
      </li>
      <li>Images have been converted to .webp format, hastening load times
        <ul>
          Services page previews minimized images rather than 4k images
        </ul>
      </li>
      <li>Improves responsiveness of buttons and links with hover states</li>
    </ul>
  </section>
  <section>
    <h3>Downgrades From Previous Version</h3>
    <ul>
      <li>Lack of server necessitates manual submission of forms via email (prefills via mailto)</li>
      <li>Page-wide search was scrapped as a server is necessary for this</li>
    </ul>
  </section>
  <section>
    <h3>Site Screenshots</h3>
    <div>
      <h4>Home (current)</h4>
      <img src="currentsite_screenshots/home.png" width="600"/>
      <h4>Home (old)</h4>
      <img src="oldsite_screenshots/fullpages/home.png" width="600"/>
    </div>
    <div>
      <h4>About (current)</h4>
      <img src="currentsite_screenshots/about.png" width="600"/>
      <h4>About (old)</h4>
      <img src="oldsite_screenshots/fullpages/about.png" width="600"/>
    </div>
    <div>
      <h4>Services (current)</h4>
      <img src="currentsite_screenshots/services.png" width="600"/>
      <h4>Services (old)</h4>
      <img src="oldsite_screenshots/fullpages/services.png" width="600"/>
    </div>
    <div>
      <h4>Projects (current)</h4>
      <img src="currentsite_screenshots/projects.png" width="600"/>
      <h4>Projects (old)</h4>
      <img src="oldsite_screenshots/fullpages/projects.png" width="600"/>
    </div>
    <div>
      <h4>Butler Building (current)</h4>
      <img src="currentsite_screenshots/butler-building.png" width="600"/>
      <h4>Butler Building (old)</h4>
      <img src="oldsite_screenshots/fullpages/butler-building.png" width="600"/>
    </div>
    <div>
      <h4>Careers (current)</h4>
      <img src="currentsite_screenshots/careers.png" width="600"/>
      <h4>Careers (old)</h4>
      <img src="oldsite_screenshots/fullpages/careers.png" width="600"/>
    </div>
    <div>
      <h4>Contact (current)</h4>
      <img src="currentsite_screenshots/contact.png" width="600"/>
      <h4>Contact (old)</h4>
      <img src="oldsite_screenshots/fullpages/contact.png" width="600"/>
    </div>
  </section>
  <aside>
    <h3>Reflection</h3>
    <p>
      I spent way too much time messing with intersectionObservers because they behave inconsistently
      between Chrome and Firefox. The nav collapsing into the hamburger menu as horizontal space constraints
      necessitate seemed like a cool idea but I'm considering removing it now because it doesn't collapse at
      the same dynamic breakpoints across browsers.
      <b>Update 02&sol;16&sol;2022&colon; Adding a root element to the intersectionObservers made behavior consistent lol</b>
    </p>
    <p>
      I created this website for Drake Hardware & Software, who currently and presumably will continue to host the 
      website after I have left their company. For the sake of preserving the state of the website at the time of my
      latest update, I am also hosting a Vercek clone of the website, which is not intended to receive
      commercial traffic. 
    </p>
  </aside>
</article>
