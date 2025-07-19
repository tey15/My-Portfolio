        // Mobile menu toggle
        const menuIcon = document.getElementById('menu-icon');
        const nav = document.querySelector('nav');
        
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuIcon.classList.toggle('active');
            
            // Toggle between menu and X icon
            if (nav.classList.contains('active')) {
                menuIcon.className = 'bx bx-x';
            } else {
                menuIcon.className = 'bx bx-menu';
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu when link is clicked
                nav.classList.remove('active');
                menuIcon.classList.remove('active');
                menuIcon.className = 'bx bx-menu';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
                nav.classList.remove('active');
                menuIcon.classList.remove('active');
                menuIcon.className = 'bx bx-menu';
            }
        });
        
        // Active navigation link
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Download CV functionality
        document.querySelector('.btn[href="#contact"]').addEventListener('click', function(e) {
            e.preventDefault();
            alert('CV download feature will be implemented soon!');
        });