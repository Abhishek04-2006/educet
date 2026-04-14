import React, { useEffect } from 'react';
import { BookOpen, GraduationCap, Users, Monitor, Award, ArrowRight, Star, Clock, Phone, MapPin, Mail, ChevronRight, Quote, ThumbsUp, TrendingUp } from 'lucide-react';
import './index.css';

function App() {
  
  // Quick smooth scroll hack
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <BookOpen size={32} color="var(--primary-blue)" />
            Edu<span>Cet</span>
          </a>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#courses" className="nav-link">Courses</a></li>
            <li><a href="#reviews" className="nav-link">Reviews</a></li>
          </ul>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="tel:07041682692" className="btn btn-outline" style={{ display: 'none' }} id="mobile-call-btn">
              <Phone size={20} />
            </a>
            <a href="tel:07041682692" className="btn btn-primary" id="desktop-call-btn">
               <Phone size={20} /> +91 7041682692
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Master Digital Skills with <span className="text-gradient">Educet Computer Institute</span></h1>
            <p>Empowering students, professionals, and job-seekers with top-tier computer education since 2019. Join us in Greater Noida for both Offline and Online training that opens doors to new career opportunities.</p>
            <div className="hero-actions">
              <a href="#courses" className="btn btn-primary">
                Explore Courses <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Book Free Trial
              </a>
            </div>
            <div className="hero-badges">
              <div className="badge">
                <div className="badge-icon">
                  <Award size={24} />
                </div>
                <div>
                  <span className="badge-text">7+ Years</span>
                  <span className="badge-sub">Excellence Hub</span>
                </div>
              </div>
              <div className="badge">
                <div className="badge-icon">
                  <Users size={24} />
                </div>
                <div>
                  <span className="badge-text">1000+</span>
                  <span className="badge-sub">Trained Students</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-blob"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students learning computer skills" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Monitor /></div>
            <h3>Practical Training</h3>
            <p style={{ color: 'var(--light-text)' }}>Hands-on experience with modern software and tools used in businesses today.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Award /></div>
            <h3>Certified Courses</h3>
            <p style={{ color: 'var(--light-text)' }}>Get recognized certificates that boost your resume and employability.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Users /></div>
            <h3>Expert Faculty</h3>
            <p style={{ color: 'var(--light-text)' }}>Learn directly from experienced professionals dedicated to your success.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Clock /></div>
            <h3>Flexible Timings</h3>
            <p style={{ color: 'var(--light-text)' }}>Classes available till 8:00 PM to suit your schedule, offering both offline & online modes.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Establishment <span className="text-gradient">Details</span></h2>
          </div>
          <div className="about-content" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--light-text)', fontSize: '1.1rem' }}>
            <p>Educet Computer Institute in Alpha 1 Commercial Belt, Greater Noida has earned a stellar reputation for providing top-notch training services. Founded in 2019, the company boasts a 4.8 rating based on 99 reviews, making it a trusted name in the industry. Situated near Alfa Mark Near Domino, the facility is easily accessible to individuals in Greater Noida and nearby areas.</p>
            <p>The company is known for its state-of-the-art infrastructure, equipped with modern training facilities. The learning environment at Educet Computer Institute in Alpha 1 Commercial Belt, Greater Noida is designed to foster growth and creativity, providing participants with the ideal atmosphere to focus on their professional development.</p>
            
            <h3 style={{ color: 'var(--dark-text)', marginTop: '1.5rem' }}>Programs Offered</h3>
            <p>Educet Computer Institute in Alpha 1 Commercial Belt, Greater Noida offers a variety of skill development programs to meet the evolving demands of various industries. Some of the major programs include:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Courses Taught:</strong> Basic Computers, CCC, CorelDRAW</li>
            </ul>
            <p>In addition to these core programs, Educet Computer Institute offers specialized training for Actors & Models, Adult, Corporate.</p>
            
            <h3 style={{ color: 'var(--dark-text)', marginTop: '1.5rem' }}>Summary</h3>
            <p>With its experienced instructors, wide range of programs, and excellent facilities, Educet Computer Institute in Alpha 1 Commercial Belt, Greater Noida is the go-to destination for anyone looking to develop new skills and enhance their career prospects. Whether you're a student, professional, or career-changer, Educet Computer Institute has everything you need to succeed in your chosen field.</p>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Premium <span className="text-gradient">Courses</span></h2>
            <p style={{ color: 'var(--light-text)', marginTop: '1rem' }}>Whether you're starting from scratch or upgrading your skills, we have the perfect tailored course for you.</p>
          </div>

          <div className="courses-grid">
            {[
              {
                title: "Computer Software Training For Corporate DTP",
                category: "Desktop Publishing",
                img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Basic Computers & CCC",
                category: "Fundamental",
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Tally & Accounting Training",
                category: "Finance",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Graphic Design Institutes",
                category: "Creative",
                img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Data Science & Analysis",
                category: "Data",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Web Designing Training",
                category: "Development",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.img} alt={course.title} className="course-img" />
                <div className="course-content">
                  <span className="course-category">{course.category}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Ask for price</a>
                    <a href="#" style={{ color: 'var(--primary-blue)', fontWeight: 600, fontSize: '0.875rem' }}>View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#courses" className="btn btn-primary">View All Specialties <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section id="reviews" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">Our Happy <span className="text-gradient">Customers</span></h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <div style={{ backgroundColor: 'rgb(34, 197, 94)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontWeight: 'bold' }}>4.8 ★</div>
              <span style={{ fontWeight: '600' }}>99 Ratings • Justdial Verified</span>
            </div>
          </div>

          <div className="key-insights">
            <div className="insight-card">
              <h3 className="insight-title text-green"><ThumbsUp size={20} /> What users liked</h3>
              <ul className="insight-list">
                <li>Friendly and supportive staff</li>
                <li>Excellent teaching methods</li>
                <li>Positive learning environment</li>
              </ul>
            </div>
            <div className="insight-card">
              <h3 className="insight-title text-red"><TrendingUp size={20} /> What can be improved</h3>
              <ul className="insight-list">
                <li>No specific dislikes mentioned in the reviews</li>
              </ul>
            </div>
          </div>

          <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
            <div className="testimonial-card">
              <Quote className="quote-icon" />
              <div className="user-info">
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #FFB75E, #ED8F03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>A</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Anuj Parashar</h4>
                  <div style={{ display: 'flex', color: '#fbbf24', marginTop: '0.25rem' }}>
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="review-tags">
                <span className="review-tag"><ThumbsUp size={12} /> Clean facilities</span>
                <span className="review-tag"><ThumbsUp size={12} /> Social distancing</span>
              </div>
              <p style={{ color: 'var(--light-text)' }}>"Educet Computer Institute offers excellent coaching with clean facilities and strict adherence to social distancing protocols. The institute provides a safe and conducive environment for learning."</p>
            </div>
            
            <div className="testimonial-card">
              <Quote className="quote-icon" />
              <div className="user-info">
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #4facfe, #00f2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>K</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem' }}>Kapil</h4>
                  <div style={{ display: 'flex', color: '#fbbf24', marginTop: '0.25rem' }}>
                    <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="review-tags">
                <span className="review-tag"><ThumbsUp size={12} /> Extracurricular activities</span>
                <span className="review-tag"><ThumbsUp size={12} /> Multiple facilities</span>
                <span className="review-tag"><ThumbsUp size={12} /> Approachable faculty</span>
              </div>
              <p style={{ color: 'var(--light-text)' }}>"Educet Computer Institute is an excellent coaching center with multiple facilities, approachable faculty, and a wide range of extracurricular activities. The institute provides a well-rounded learning experience for students looking to excel in computer education."</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Frequently Asked <span className="text-gradient">Question</span></h2>
          </div>
          
          <div className="faq-list" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="faq-item" style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-text)' }}>1. What is the duration of a course that I can pursue at a computer training institute?</h3>
              <p style={{ color: 'var(--light-text)' }}>The duration of a course at computer training institutes will depend on the type of course you choose. On average, it can take six to twelve months to complete a course. Some courses may take even more time. We advise you to call them in advance and ask about the same.</p>
            </div>
            
            <div className="faq-item" style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-text)' }}>2. Do I need to have my own laptop/computer to study at Educet Computer Institute?</h3>
              <p style={{ color: 'var(--light-text)' }}>No, you don't need to have your own laptop/computer. Educet Computer Institute usually provides you with a computer to practice on during the classes.</p>
            </div>
            
            <div className="faq-item" style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-text)' }}>3. How much fees does Educet Computer Institute in Alpha 1 Commercial Belt charge?</h3>
              <p style={{ color: 'var(--light-text)' }}>The fees for any classes will depend on the course you have chosen. Thus, we advise you to call Educet Computer Institute and enquire about their courses and fee structure.</p>
            </div>
            
            <div className="faq-item" style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark-text)' }}>4. Does Educet Computer Institute in Alpha 1 Commercial Belt charge a fee on a monthly basis?</h3>
              <p style={{ color: 'var(--light-text)' }}>Most computer training institutes charge a fee to their students on a monthly or yearly basis. This may vary from one place to another and also depending on the course.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="logo" style={{ color: 'white', marginBottom: '1rem', display: 'inline-flex' }}>
                <BookOpen size={28} color="var(--primary-orange)" />
                Edu<span>Cet</span>
              </a>
              <p>Educet Computer Institute offers top-notch computer training to individuals seeking to elevate their careers and digital skills in Greater Noida.</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                {/* Social placeholders */}
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)' }}>fb</a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)' }}>ig</a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition)' }}>tw</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="#home"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>Home</a>
                <a href="#about"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>About Institute</a>
                <a href="#courses"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>All Courses</a>
                <a href="#reviews"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>Student Reviews</a>
                <a href="#faq"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>FAQs</a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Popular Courses</h3>
              <div className="footer-links">
                <a href="#courses"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>DTP Training</a>
                <a href="#courses"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>Basic Computers & CCC</a>
                <a href="#courses"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>Tally & Accounting</a>
                <a href="#courses"><ChevronRight size={14} style={{ display: 'inline', marginRight: '0.5rem' }}/>Web Designing</a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <span>Office No. 304, 3rd Floor, Om Tower, Alfa Mark Near Domino, Alpha 1 Commercial Belt, Greater Noida - 201310</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <span><a href="tel:07041682692">+91 07041682692</a></span>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" size={20} />
                <span>Mon - Sun: Open until 8:00 PM</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Educet Computer Institute. All rights reserved. Designed for Excellence.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Toggle Button */}
      <a 
        href="https://wa.me/917041682692" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
