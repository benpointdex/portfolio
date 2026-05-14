import React from 'react';

const techStack = [
  { name: 'Java', icon: '/icons/Java.svg' },
  { name: 'Kafka', icon: '/icons/apachekafka.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Hibernate', icon: '/icons/hibernate.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Postman', icon: '/icons/postman.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Redis', icon: '/icons/redis.svg' },
  { name: 'Spring', icon: '/icons/spring.svg' },
  { name: 'Spring Boot', icon: '/icons/springboot.svg' },
  { name: 'Security', icon: '/icons/springsecurity.svg' },
];

const TechCarousel = () => {
  // Duplicate the array to create a seamless infinite scroll effect
  const displayStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="logo-carousel-container">
      <div className="logo-track">
        {displayStack.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="logo-item">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="logo-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
