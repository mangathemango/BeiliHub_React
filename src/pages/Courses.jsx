import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import Modal from '../components/Modal';
import CosmicBackground from '../components/CosmicBackground';
import { sampleCourses } from '../data/courses';

const Courses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [filteredCourses, setFilteredCourses] = useState(sampleCourses);
    const [activeTag, setActiveTag] = useState('All');
    const [sortBy, setSortBy] = useState('popular');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;

    const tags = ['All', 'Web', 'AI', 'Data', 'Security'];

    useEffect(() => {
        let filtered = [...sampleCourses];

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(course =>
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.tag.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by tag
        if (activeTag !== 'All') {
            filtered = filtered.filter(course => course.tag === activeTag);
        }

        // Sort courses
        switch (sortBy) {
            case 'new':
                filtered = filtered.slice().reverse();
                break;
            case 'length':
                filtered = filtered.slice().sort((a, b) =>
                    parseFloat(a.length) - parseFloat(b.length)
                );
                break;
            default: // 'popular'
                // Keep original order (most popular first)
                break;
        }

        setFilteredCourses(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [searchQuery, activeTag, sortBy]);

    const handlePreview = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCourse(null);
    };

    const handleTagClick = (tag) => {
        setActiveTag(tag);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Pagination logic
    const totalPages = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage));
    const currentPageCourses = filteredCourses.slice(
        (currentPage - 1) * coursesPerPage,
        currentPage * coursesPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <CosmicBackground variant="full" />

            <div className="container">
                <section className="courses-hero">
                    <h1>All courses</h1>
                    <p className="muted">Filter, search and preview courses. Click any card to open a quick preview.</p>
                </section>

                <section className="filters">
                    <div className="chip-group">
                        {tags.map(tag => (
                            <button
                                key={tag}
                                className={`chip ${activeTag === tag ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <div className="sort">
                        <label>Sort</label>
                        <select value={sortBy} onChange={handleSortChange}>
                            <option value="popular">Most popular</option>
                            <option value="new">Newest</option>
                            <option value="length">Shortest</option>
                        </select>
                    </div>
                </section>

                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        className="search"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ width: '100%', maxWidth: '400px' }}
                    />
                </div>

                <section className="cards-grid">
                    {currentPageCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onPreview={handlePreview}
                        />
                    ))}
                </section>

                {totalPages > 1 && (
                    <div className="pager">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={currentPage === page ? 'active' : ''}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}

                {filteredCourses.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                        <p>No courses found matching your criteria.</p>
                    </div>
                )}
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                title={selectedCourse?.title || 'Preview'}
                description={selectedCourse?.desc || 'Course preview description'}
            />
        </>
    );
};

export default Courses;