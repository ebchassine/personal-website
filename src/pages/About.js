import React from 'react';
import { ContentBox } from '../components/ContentBox';

function About() {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Welcome!</h2>
      
      <ContentBox className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Quickstart</h3>
          <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit non nulla a tempor. Vivamus sed justo tellus. Vivamus pulvinar suscipit ante, ac iaculis mi convallis a. Donec interdum metus vitae odio elementum, id consectetur nunc pretium. Cras scelerisque, mauris ut posuere varius, mauris mauris pellentesque odio, in sodales metus nibh lacinia elit. Suspendisse potenti. Proin luctus vestibulum ullamcorper. Mauris id nisi sed ante dictum sollicitudin et quis turpis. Cras vel metus a erat finibus efficitur id vel lacus. Donec dictum feugiat dignissim. Donec mattis lacus eros, non finibus metus condimentum at. Vestibulum aliquam at enim sit amet aliquet. Vestibulum sit amet urna sed tellus egestas porttitor in eu enim. In aliquam sollicitudin placerat.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="images/AboutImage.png" alt="Quickstart" className="object-cover rounded-lg shadow-md" /> 
        </div>
      </ContentBox>
      <ContentBox className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">My Academic Experience</h3>
          <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit non nulla a tempor. Vivamus sed justo tellus. Vivamus pulvinar suscipit ante, ac iaculis mi convallis a. Donec interdum metus vitae odio elementum, id consectetur nunc pretium. Cras scelerisque, mauris ut posuere varius, mauris mauris pellentesque odio, in sodales metus nibh lacinia elit. Suspendisse potenti. Proin luctus vestibulum ullamcorper. Mauris id nisi sed ante dictum sollicitudin et quis turpis. Cras vel metus a erat finibus efficitur id vel lacus. Donec dictum feugiat dignissim. Donec mattis lacus eros, non finibus metus condimentum at. Vestibulum aliquam at enim sit amet aliquet. Vestibulum sit amet urna sed tellus egestas porttitor in eu enim. In aliquam sollicitudin placerat.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="images/skyline.JPG?height=300&width=400" alt="My Skills" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>
      
      <ContentBox className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Skills and Interests</h3>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit non nulla a tempor. Vivamus sed justo tellus. Vivamus pulvinar suscipit ante, ac iaculis mi convallis a. Donec interdum metus vitae odio elementum, id consectetur nunc pretium. Cras scelerisque, mauris ut posuere varius, mauris mauris pellentesque odio, in sodales metus nibh lacinia elit. Suspendisse potenti. Proin luctus vestibulum ullamcorper. Mauris id nisi sed ante dictum sollicitudin et quis turpis. Cras vel metus a erat finibus efficitur id vel lacus. Donec dictum feugiat dignissim. Donec mattis lacus eros, non finibus metus condimentum at. Vestibulum aliquam at enim sit amet aliquet. Vestibulum sit amet urna sed tellus egestas porttitor in eu enim. In aliquam sollicitudin placerat.
            
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="images/skyline.JPG?height=300&width=400" alt="About Me" className="rounded-lg shadow-md" />
        </div>
      </ContentBox>
    </section>
  );
}

export default About;