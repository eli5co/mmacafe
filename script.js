/**
 * MMA.Cafe - Main JavaScript
 * 
 * A complete directory website for MMA gyms
 */

// ===== Global Variables =====
const CONFIG = {
    ITEMS_PER_PAGE: 6,
    STORAGE_FAVORITES_KEY: 'mma-cafe-favorites'
};

// ===== Sample Data =====
// This would normally come from a database or API
const sampleGyms = [
    {
        id: 'gym-1',
        name: '10th Planet Jiu Jitsu',
        slug: '10th-planet-jiu-jitsu',
        categories: ['Brazilian Jiu-Jitsu', 'MMA'],
        location: 'San Diego, CA',
        description: 'Specialized no-gi jiu-jitsu system with a focus on advanced techniques and MMA applications.',
        rating: 4.5,
        reviewCount: 32,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1622092807278-797ed096605c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '123 Main Street, San Diego, CA 92101',
        phone: '(619) 555-1234',
        website: 'https://example.com/10thplanet',
        hours: {
            monday: '6:00 AM - 9:00 PM',
            tuesday: '6:00 AM - 9:00 PM',
            wednesday: '6:00 AM - 9:00 PM',
            thursday: '6:00 AM - 9:00 PM',
            friday: '6:00 AM - 8:00 PM',
            saturday: '8:00 AM - 5:00 PM',
            sunday: '10:00 AM - 2:00 PM'
        },
        features: ['Free Trial', 'Showers', 'Pro Shop', 'Kids Classes'],
        gallery: [
            'https://images.unsplash.com/photo-1622092807278-797ed096605c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1616279969856-759f316a5ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1583473848882-8a7fecf261c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-2',
        name: 'MMA Elite Training Center',
        slug: 'mma-elite-training-center',
        categories: ['MMA', 'Boxing', 'Muay Thai'],
        location: 'Los Angeles, CA',
        description: 'Full-service MMA gym with professional coaches and competition training programs.',
        rating: 4.8,
        reviewCount: 45,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '456 Fight Avenue, Los Angeles, CA 90001',
        phone: '(213) 555-6789',
        website: 'https://example.com/mmaelite',
        hours: {
            monday: '5:00 AM - 10:00 PM',
            tuesday: '5:00 AM - 10:00 PM',
            wednesday: '5:00 AM - 10:00 PM',
            thursday: '5:00 AM - 10:00 PM',
            friday: '5:00 AM - 10:00 PM',
            saturday: '7:00 AM - 8:00 PM',
            sunday: '8:00 AM - 6:00 PM'
        },
        features: ['Free Trial', 'Showers', 'Sauna', 'Weight Room', 'Pro Shop'],
        gallery: [
            'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-3',
        name: 'Gracie Barra',
        slug: 'gracie-barra',
        categories: ['Brazilian Jiu-Jitsu'],
        location: 'Austin, TX',
        description: 'Traditional Brazilian Jiu-Jitsu with a structured curriculum for all skill levels.',
        rating: 4.7,
        reviewCount: 38,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1583473848882-8a7fecf261c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '789 BJJ Lane, Austin, TX 78701',
        phone: '(512) 555-9012',
        website: 'https://example.com/graciebarra',
        hours: {
            monday: '6:30 AM - 9:30 PM',
            tuesday: '6:30 AM - 9:30 PM',
            wednesday: '6:30 AM - 9:30 PM',
            thursday: '6:30 AM - 9:30 PM',
            friday: '6:30 AM - 8:00 PM',
            saturday: '9:00 AM - 3:00 PM',
            sunday: 'Closed'
        },
        features: ['Free Trial', 'Gi Rental', 'Showers', 'Pro Shop'],
        gallery: [
            'https://images.unsplash.com/photo-1583473848882-8a7fecf261c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1615657551346-2a819c17c0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1622092807278-797ed096605c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-4',
        name: 'Alliance MMA',
        slug: 'alliance-mma',
        categories: ['MMA', 'Wrestling', 'Boxing'],
        location: 'New York, NY',
        description: 'Championship-level training facility with multiple UFC fighters on the roster.',
        rating: 4.9,
        reviewCount: 56,
        hasFreeTrial: false,
        image: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '321 Fighter Road, New York, NY 10001',
        phone: '(212) 555-3456',
        website: 'https://example.com/alliancemma',
        hours: {
            monday: '6:00 AM - 10:00 PM',
            tuesday: '6:00 AM - 10:00 PM',
            wednesday: '6:00 AM - 10:00 PM',
            thursday: '6:00 AM - 10:00 PM',
            friday: '6:00 AM - 10:00 PM',
            saturday: '8:00 AM - 6:00 PM',
            sunday: '9:00 AM - 3:00 PM'
        },
        features: ['Showers', 'Sauna', 'Weight Room', 'Physical Therapy'],
        gallery: [
            'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-5',
        name: 'Tiger Muay Thai',
        slug: 'tiger-muay-thai',
        categories: ['Muay Thai', 'Kickboxing'],
        location: 'Miami, FL',
        description: 'Authentic Muay Thai training with experienced Thai instructors and regular seminars.',
        rating: 4.6,
        reviewCount: 29,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '555 Thai Street, Miami, FL 33101',
        phone: '(305) 555-7890',
        website: 'https://example.com/tigermuaythai',
        hours: {
            monday: '7:00 AM - 9:00 PM',
            tuesday: '7:00 AM - 9:00 PM',
            wednesday: '7:00 AM - 9:00 PM',
            thursday: '7:00 AM - 9:00 PM',
            friday: '7:00 AM - 9:00 PM',
            saturday: '9:00 AM - 5:00 PM',
            sunday: '10:00 AM - 2:00 PM'
        },
        features: ['Free Trial', 'Showers', 'Fight Team', 'Weight Room'],
        gallery: [
            'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1614092192514-96669db4192d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-6',
        name: 'American Top Team',
        slug: 'american-top-team',
        categories: ['MMA', 'Wrestling', 'Brazilian Jiu-Jitsu'],
        location: 'Atlanta, GA',
        description: 'World-class MMA training facility with programs for beginners to professional fighters.',
        rating: 4.9,
        reviewCount: 67,
        hasFreeTrial: false,
        image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '789 Champion Blvd, Atlanta, GA 30301',
        phone: '(404) 555-0123',
        website: 'https://example.com/att',
        hours: {
            monday: '5:30 AM - 10:00 PM',
            tuesday: '5:30 AM - 10:00 PM',
            wednesday: '5:30 AM - 10:00 PM',
            thursday: '5:30 AM - 10:00 PM',
            friday: '5:30 AM - 10:00 PM',
            saturday: '7:00 AM - 7:00 PM',
            sunday: '8:00 AM - 4:00 PM'
        },
        features: ['Showers', 'Sauna', 'Weight Room', 'Recovery Center'],
        gallery: [
            'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1577460551100-d3f64509dde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-7',
        name: 'West Coast Boxing Gym',
        slug: 'west-coast-boxing-gym',
        categories: ['Boxing'],
        location: 'Seattle, WA',
        description: 'Traditional boxing gym with competition training and fitness classes for all levels.',
        rating: 4.2,
        reviewCount: 24,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '123 Boxer Lane, Seattle, WA 98101',
        phone: '(206) 555-4567',
        website: 'https://example.com/westcoastboxing',
        hours: {
            monday: '6:00 AM - 9:00 PM',
            tuesday: '6:00 AM - 9:00 PM',
            wednesday: '6:00 AM - 9:00 PM',
            thursday: '6:00 AM - 9:00 PM',
            friday: '6:00 AM - 9:00 PM',
            saturday: '8:00 AM - 5:00 PM',
            sunday: 'Closed'
        },
        features: ['Free Trial', 'Showers', 'Boxing Ring', 'Heavy Bags'],
        gallery: [
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1583473848882-8a7fecf261c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1585757318177-a8665f778098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    },
    {
        id: 'gym-8',
        name: 'Krav Maga Defense Institute',
        slug: 'krav-maga-defense-institute',
        categories: ['Krav Maga', 'Self Defense'],
        location: 'Chicago, IL',
        description: 'Practical self-defense training using Israeli Krav Maga techniques for real-world situations.',
        rating: 4.4,
        reviewCount: 31,
        hasFreeTrial: true,
        image: 'https://images.unsplash.com/photo-1616279969856-759f316a5ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        address: '456 Defense Drive, Chicago, IL 60601',
        phone: '(312) 555-8901',
        website: 'https://example.com/kravmaga',
        hours: {
            monday: '6:00 AM - 9:00 PM',
            tuesday: '6:00 AM - 9:00 PM',
            wednesday: '6:00 AM - 9:00 PM',
            thursday: '6:00 AM - 9:00 PM',
            friday: '6:00 AM - 8:00 PM',
            saturday: '9:00 AM - 3:00 PM',
            sunday: 'Closed'
        },
        features: ['Free Trial', 'Showers', 'Self-Defense Seminars'],
        gallery: [
            'https://images.unsplash.com/photo-1616279969856-759f316a5ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            'https://images.unsplash.com/photo-1584380931214-dbb69a88e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        ]
    }
];

// ===== Event Listeners =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize view toggles
    initializeViewToggles();
    
    // Initialize filters
    initializeFilters();
    
    // Initialize favorites
    initializeFavorites();
    
    // Initialize pagination
    initializePagination();
    
    // Initialize newsletter form
    initializeNewsletter();
    
    // Initialize gym modal
    initializeGymModal();
    
    // Update results count
    updateResultsCount(sampleGyms.length);
    
    // Fetch and display initial listings
    fetchListings();
});

// ===== Mobile Menu =====
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const header = document.querySelector('.site-header');
    
    if (mobileMenuToggle && header) {
        mobileMenuToggle.addEventListener('click', function() {
            header.classList.toggle('menu-open');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-menu')) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        
        // Clone main navigation
        const navLinks = document.createElement('div');
        navLinks.className = 'nav-links';
        
        const mainNav = document.querySelector('.main-nav ul');
        if (mainNav) {
            const links = Array.from(mainNav.querySelectorAll('a')).map(a => {
                return `<a href="${a.href}" ${a.classList.contains('active') ? 'class="active"' : ''}>${a.textContent}</a>`;
            });
            navLinks.innerHTML = links.join('');
        }
        
        // Clone user navigation
        const userLinks = document.createElement('div');
        userLinks.className = 'user-links';
        
        const userNav = document.querySelector('.user-nav');
        if (userNav) {
            userLinks.innerHTML = userNav.innerHTML;
        }
        
        mobileMenu.appendChild(navLinks);
        mobileMenu.appendChild(userLinks);
        header.appendChild(mobileMenu);
    }
}

// ===== View Toggles =====
function initializeViewToggles() {
    const viewOptions = document.querySelectorAll('.view-option');
    const listingsContainer = document.getElementById('listings-container');
    
    if (viewOptions.length && listingsContainer) {
        viewOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                viewOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                // Get view type and update container
                const viewType = this.getAttribute('data-view');
                
                if (viewType === 'grid') {
                    listingsContainer.className = 'listings-container grid-view';
                } else if (viewType === 'list') {
                    listingsContainer.className = 'listings-container list-view';
                }
            });
        });
    }
}

// ===== Filters =====
function initializeFilters() {
    const filtersForm = document.getElementById('filters-form');
    const heroSearchForm = document.getElementById('hero-search');
    
    // Filters form submission
    if (filtersForm) {
        filtersForm.addEventListener('submit', function(e) {
            e.preventDefault();
            applyFilters();
        });
        
        // Reset button
        filtersForm.addEventListener('reset', function() {
            setTimeout(() => applyFilters(), 10);
        });
    }
    
    // Hero search form
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('.search-input');
            
            if (searchInput && searchInput.value.trim()) {
                // Scroll to listings
                document.querySelector('.listings-section').scrollIntoView({ behavior: 'smooth' });
                
                // Set search value to filter
                const stateSelect = document.getElementById('state');
                if (stateSelect) {
                    // For demo, just select a random state from options
                    const options = stateSelect.querySelectorAll('option:not(:first-child)');
                    const randomIndex = Math.floor(Math.random() * options.length);
                    stateSelect.value = options[randomIndex].value;
                }
                
                // Apply filters
                applyFilters();
            }
        });
    }
    
    // On mobile, add filter toggle button for small screens
    if (window.innerWidth < 768) {
        const filterToggleBtn = document.createElement('button');
        filterToggleBtn.className = 'filter-toggle-btn';
        filterToggleBtn.innerHTML = '<i class="fas fa-filter"></i> Filters';
        
        const listingsHeader = document.querySelector('.listings-header');
        if (listingsHeader) {
            listingsHeader.prepend(filterToggleBtn);
            
            // Create overlay
            const filterOverlay = document.createElement('div');
            filterOverlay.className = 'filter-overlay';
            document.body.appendChild(filterOverlay);
            
            // Open filters on click
            filterToggleBtn.addEventListener('click', function() {
                const filtersSection = document.querySelector('.filters-section');
                if (filtersSection) {
                    filtersSection.classList.add('active');
                    filterOverlay.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            });
            
            // Close filters when clicking overlay
            filterOverlay.addEventListener('click', function() {
                const filtersSection = document.querySelector('.filters-section');
                if (filtersSection) {
                    filtersSection.classList.remove('active');
                    filterOverlay.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
            
            // Add close button to filters
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '<i class="fas fa-times"></i>';
            closeBtn.className = 'close-filter-btn';
            
            const filtersContainer = document.querySelector('.filters-container');
            if (filtersContainer) {
                filtersContainer.prepend(closeBtn);
                
                closeBtn.addEventListener('click', function() {
                    const filtersSection = document.querySelector('.filters-section');
                    if (filtersSection) {
                        filtersSection.classList.remove('active');
                        filterOverlay.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                    }
                });
            }
        }
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `(${count} results)`;
    }
}

// Apply filters to the listings
function applyFilters() {
    const state = document.getElementById('state')?.value || '';
    const martialArt = document.getElementById('martial-art')?.value || '';
    const rating = document.getElementById('rating')?.value || '';
    const freeTrial = document.getElementById('free-trial')?.checked || false;
    const openNow = document.getElementById('open-now')?.checked || false;
    
    // Filter the sample data based on criteria
    let filteredGyms = [...sampleGyms];
    
    if (state) {
        filteredGyms = filteredGyms.filter(gym => gym.location.includes(state));
    }
    
    if (martialArt) {
        filteredGyms = filteredGyms.filter(gym => 
            gym.categories.some(cat => cat.toLowerCase().includes(martialArt.toLowerCase()))
        );
    }
    
    if (rating) {
        const minRating = parseFloat(rating);
        filteredGyms = filteredGyms.filter(gym => gym.rating >= minRating);
    }
    
    if (freeTrial) {
        filteredGyms = filteredGyms.filter(gym => gym.hasFreeTrial);
    }
    
    if (openNow) {
        // This would normally check current time against business hours
        // For demo, just randomly filter out some gyms
        filteredGyms = filteredGyms.filter(() => Math.random() > 0.3);
    }
    
    // Update results count
    updateResultsCount(filteredGyms.length);
    
    // Render filtered listings
    renderListings(filteredGyms);
}

// ===== Favorites =====
function initializeFavorites() {
    // Add click events using delegation
    document.addEventListener('click', function(e) {
        const favoriteBtn = e.target.closest('.btn-favorite');
        if (favoriteBtn) {
            const gymId = favoriteBtn.getAttribute('data-id');
            toggleFavorite(gymId, favoriteBtn);
        }
    });
}

// Get favorites from localStorage
function getFavorites() {
    const favorites = localStorage.getItem(CONFIG.STORAGE_FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

// Toggle favorite status for a gym
function toggleFavorite(gymId, button) {
    let favorites = getFavorites();
    
    if (favorites.includes(gymId)) {
        // Remove from favorites
        favorites = favorites.filter(id => id !== gymId);
        button.innerHTML = '<i class="far fa-heart"></i>';
        button.classList.remove('active');
    } else {
        // Add to favorites
        favorites.push(gymId);
        button.innerHTML = '<i class="fas fa-heart"></i>';
        button.classList.add('active');
    }
    
    // Save to localStorage
    localStorage.setItem(CONFIG.STORAGE_FAVORITES_KEY, JSON.stringify(favorites));
}

// ===== Pagination =====
function initializePagination() {
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');
    const pageNumbers = document.querySelectorAll('.page-number');
    
    if (!prevPageBtn || !nextPageBtn || !pageNumbers.length) return;
    
    let currentPage = 1;
    const totalPages = pageNumbers.length;
    
    // Page number buttons
    pageNumbers.forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            currentPage = parseInt(this.textContent);
            updatePagination(currentPage);
            fetchListings(currentPage);
        });
    });
    
    // Previous page button
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination(currentPage);
            fetchListings(currentPage);
        }
    });
    
    // Next page button
    nextPageBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination(currentPage);
            fetchListings(currentPage);
        }
    });
    
    // Initial pagination setup
    updatePagination(currentPage);
}

// Update pagination UI
function updatePagination(currentPage) {
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');
    const pageNumbers = document.querySelectorAll('.page-number');
    const totalPages = pageNumbers.length;
    
    // Update active page
    pageNumbers.forEach(btn => {
        if (parseInt(btn.textContent) === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Disable/enable previous button
    if (currentPage === 1) {
        prevPageBtn.setAttribute('disabled', 'disabled');
    } else {
        prevPageBtn.removeAttribute('disabled');
    }
    
    // Disable/enable next button
    if (currentPage === totalPages) {
        nextPageBtn.setAttribute('disabled', 'disabled');
    } else {
        nextPageBtn.removeAttribute('disabled');
    }
}

// ===== Fetch Listings =====
function fetchListings(page = 1) {
    // In a real app, this would make an API call to fetch data
    // For demo, we'll use the sample data with a loading delay
    
    // Show loading indicator
    const listingsContainer = document.getElementById('listings-container');
    if (listingsContainer) {
        listingsContainer.innerHTML = '<div class="loading-indicator"><i class="fas fa-spinner fa-spin"></i> Loading gyms...</div>';
    }
    
    // Simulate network delay
    setTimeout(() => {
        // Calculate pagination
        const itemsPerPage = CONFIG.ITEMS_PER_PAGE;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, sampleGyms.length);
        const paginatedGyms = sampleGyms.slice(startIndex, endIndex);
        
        // Render the gyms
        renderListings(paginatedGyms);
    }, 500);
}

// ===== Render Listings =====
function renderListings(gyms) {
    const listingsContainer = document.getElementById('listings-container');
    if (!listingsContainer) return;
    
    // Clear container
    listingsContainer.innerHTML = '';
    
    // Show "no results" message if no gyms
    if (gyms.length === 0) {
        listingsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No gyms found</h3>
                <p>Try adjusting your filters or search for a different location.</p>
            </div>
        `;
        return;
    }
    
    // Get favorites
    const favorites = getFavorites();
    
    // Render each gym
    gyms.forEach(gym => {
        // Generate stars HTML
        let starsHtml = '';
        const fullStars = Math.floor(gym.rating);
        const hasHalfStar = gym.rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        
        // Features badge
        let featuresHtml = '';
        if (gym.hasFreeTrial) {
            featuresHtml += '<span class="feature free-trial">Free Trial</span>';
        }
        
        // Check if favorited
        const isFavorite = favorites.includes(gym.id);
        const favoriteIconClass = isFavorite ? 'fas fa-heart' : 'far fa-heart';
        const favoriteActiveClass = isFavorite ? 'active' : '';
        
        // Create card HTML
        const card = document.createElement('div');
        card.className = 'listing-card';
        card.innerHTML = `
            <div class="listing-image">
                <img src="${gym.image}" alt="${gym.name}">
                <div class="listing-category">
                    <span>${gym.categories[0]}</span>
                </div>
                <div class="listing-rating">
                    <span class="stars">
                        ${starsHtml}
                    </span>
                    <span class="rating-number">${gym.rating.toFixed(1)}</span>
                </div>
                <div class="listing-features">
                    ${featuresHtml}
                </div>
            </div>
            <div class="listing-content">
                <h3 class="listing-title">${gym.name}</h3>
                <div class="listing-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${gym.location}</span>
                </div>
                <p class="listing-description">
                    ${gym.description}
                </p>
                <div class="listing-actions">
                    <button class="btn btn-primary btn-view-details" data-id="${gym.id}">View Details</button>
                    <button class="btn-icon btn-favorite ${favoriteActiveClass}" data-id="${gym.id}">
                        <i class="${favoriteIconClass}"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Add to container
        listingsContainer.appendChild(card);
    });
    
    // Add event listeners to view details buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gymId = this.getAttribute('data-id');
            openGymModal(gymId);
        });
    });
}

// ===== Newsletter =====
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                // In a real app, call an API to subscribe user
                // For demo, just show success message
                
                this.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle" style="color: var(--success); font-size: 2rem; margin-bottom: 1rem;"></i>
                        <p>Thank you for subscribing! We've sent a confirmation email to ${emailInput.value}</p>
                    </div>
                `;
            }
        });
    }
}

// ===== Gym Modal =====
function initializeGymModal() {
    // Set up modal close events
    const modal = document.getElementById('gym-modal');
    const closeBtn = modal.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGymModal);
    }
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGymModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeGymModal();
        }
    });
}

// Open gym details modal
function openGymModal(gymId) {
    // Find gym data
    const gym = sampleGyms.find(g => g.id === gymId);
    if (!gym) return;
    
    // Get modal elements
    const modal = document.getElementById('gym-modal');
    const modalContainer = document.getElementById('modal-container');
    
    if (!modal || !modalContainer) return;
    
    // Generate stars HTML
    let starsHtml = '';
    const fullStars = Math.floor(gym.rating);
    const hasHalfStar = gym.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    // Get favorites
    const favorites = getFavorites();
    const isFavorite = favorites.includes(gymId);
    const favoriteIconClass = isFavorite ? 'fas fa-heart' : 'far fa-heart';
    const favoriteActiveClass = isFavorite ? 'active' : '';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="modal-header" style="background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${gym.image}');">
            <h2>${gym.name}</h2>
            <div class="modal-categories">
                ${gym.categories.map(cat => `<span class="modal-category">${cat}</span>`).join('')}
            </div>
            <div class="modal-rating">
                <span class="stars">${starsHtml}</span>
                <span class="rating-text">${gym.rating.toFixed(1)} (${gym.reviewCount} reviews)</span>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>About</h3>
                <p>${gym.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Information</h3>
                <div class="gym-info">
                    <div class="info-item">
                        <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div>${gym.address}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon"><i class="fas fa-phone"></i></div>
                        <div><a href="tel:${gym.phone}">${gym.phone}</a></div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon"><i class="fas fa-globe"></i></div>
                        <div><a href="${gym.website}" target="_blank">${gym.website.replace(/^https?:\/\//, '')}</a></div>
                    </div>
                    <div class="info-item">
                        <div class="info-icon"><i class="fas fa-tag"></i></div>
                        <div>${gym.hasFreeTrial ? 'Free trial available' : 'No free trial'}</div>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Hours</h3>
                <div class="hours-list">
                    ${Object.entries(gym.hours).map(([day, hours]) => `
                        <div class="hours-item">
                            <div class="hours-day">${day.charAt(0).toUpperCase() + day.slice(1)}</div>
                            <div class="hours-time">${hours}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Features</h3>
                <div class="features-list">
                    ${gym.features.map(feature => `
                        <div class="feature-tag">${feature}</div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Photos</h3>
                <div class="gallery">
                    ${gym.gallery.map(image => `
                        <div class="gallery-item">
                            <img src="${image}" alt="${gym.name}">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="action-buttons">
                <a href="tel:${gym.phone}" class="btn btn-primary">
                    <i class="fas fa-phone"></i> Call
                </a>
                <a href="https://maps.google.com/?q=${encodeURIComponent(gym.address)}" target="_blank" class="btn btn-outline">
                    <i class="fas fa-directions"></i> Directions
                </a>
                <button class="btn-icon btn-favorite ${favoriteActiveClass}" data-id="${gym.id}">
                    <i class="${favoriteIconClass}"></i>
                </button>
            </div>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close gym modal
function closeGymModal() {
    const modal = document.getElementById('gym-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}
