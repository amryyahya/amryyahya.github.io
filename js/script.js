document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. Mouse Spotlight Cursor Glow Effect
    // ==========================================================================
    const cursorGlow = document.getElementById('cursor-glow');
    
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }

    // ==========================================================================
    // 2. Mobile Menu Toggle
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // 3. ScrollSpy & Sticky Header
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 4. Interactive Projects Filter
    // ==========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ==========================================================================
    // 5. Adventurer's Scroll - Interactive RPG character sheet typing simulation
    // ==========================================================================
    const terminalBody = document.getElementById('terminal-body');

    if (terminalBody) {
        terminalBody.innerHTML = ''; // Clear noscript fallback

        const terminalScript = [
            { type: 'input', text: 'inspect self' },
            { type: 'output', text: '<span class="highlight-val">amryyahya</span> — Level 99 DevOps & Cloud Infrastructure Architect' },
            { type: 'wait', ms: 500 },
            
            { type: 'input', text: 'cat character_sheet.yaml' },
            { type: 'output', text: `---<br><span class="highlight-val">hero:</span><br>&nbsp;&nbsp;name: Amry Yahya<br>&nbsp;&nbsp;class: DevOps Engineer<br>&nbsp;&nbsp;realm: Yogyakarta, Indonesia<br><span class="highlight-val">key_skills:</span><br>&nbsp;&nbsp;ansible_autocast: <span class="success-val">"Server setup time reduced by 60%"</span><br>&nbsp;&nbsp;gitlab_cicd_swift: <span class="success-val">"3x deployment frequency acceleration"</span><br>&nbsp;&nbsp;docker_ward: <span class="success-val">"99.9% availability across 20+ instances"</span><br>&nbsp;&nbsp;ai_arcane_ingest: <span class="success-val">"Indexed 215,000+ docs (Redis, Memgraph, Qdrant)"</span>` },
            { type: 'wait', ms: 800 },
            
            { type: 'input', text: 'cast detection_of_infrastructure_sickness' },
            { type: 'output', text: `You cast the 🛡️ Infrastructure Ward spell.<br><br>[Ward Integrity Check]<br>✓ Nginx & SSL Certificate Pinning: <span class="success-val">"Valid" — MITM Protection: Enabled</span><br>✓ Telegram familiars & Uptime Kuma totem: <span class="success-val">"Status: ONLINE, Monitored: 20 containers"</span><br>✓ Docker containers: <span class="success-val">"19/20 healthy, 1 regenerating"</span><br><br>All wards hold firm. The realm prospers.` },
            { type: 'wait', ms: 1000 },
            
            { type: 'input', text: 'echo "Infrastructure automated and operational."' },
            { type: 'output', text: '<span class="success-val">Infrastructure automated and operational.</span>' },
            { type: 'wait', ms: 2500 }
        ];

        async function runTerminalSimulation() {
            while (true) {
                terminalBody.innerHTML = '';
                for (let step of terminalScript) {
                    if (step.type === 'input') {
                        const line = document.createElement('div');
                        line.className = 'term-line';
                        
                        const prompt = document.createElement('span');
                        prompt.className = 'term-prompt';
                        prompt.textContent = '➤ ';
                        line.appendChild(prompt);
                        
                        const cmdText = document.createElement('span');
                        line.appendChild(cmdText);
                        
                        const caret = document.createElement('span');
                        caret.className = 'term-caret';
                        line.appendChild(caret);
                        
                        terminalBody.appendChild(line);
                        terminalBody.scrollTop = terminalBody.scrollHeight;

                        for (let i = 0; i < step.text.length; i++) {
                            cmdText.textContent += step.text[i];
                            await new Promise(r => setTimeout(r, 50 + Math.random() * 30));
                        }
                        
                        caret.remove();
                        
                    } else if (step.type === 'output') {
                        const output = document.createElement('div');
                        output.className = 'term-output';
                        output.innerHTML = step.text;
                        
                        terminalBody.appendChild(output);
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                        
                    } else if (step.type === 'wait') {
                        await new Promise(r => setTimeout(r, step.ms));
                    }
                }
                
                await new Promise(r => setTimeout(r, 4000));
            }
        }

        runTerminalSimulation();
    }

    // ==========================================================================
    // 6. Formspree Contact Form Submission Handling
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formStatus.className = '';
            formStatus.style.display = 'none';
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending Message...';
            submitBtn.disabled = true;

            const data = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully. I will get back to you shortly.";
                    formStatus.className = 'success';
                    contactForm.reset();
                } else {
                    const responseData = await response.json();
                    if (responseData.errors) {
                        formStatus.textContent = responseData.errors.map(error => error.message).join(", ");
                    } else {
                        formStatus.textContent = "Oops! There was a problem submitting your message. Please try again.";
                    }
                    formStatus.className = 'error';
                }
            } catch (error) {
                formStatus.textContent = "Network connection error. Please check your internet and try again.";
                formStatus.className = 'error';
            } finally {
                formStatus.style.display = 'block';
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
