# Changelog

## [1.0.13] - 2024-12-02

### Fixed

- **Removed debug console.log**: Cleaned up console.log statement that was logging props on every render
  - Improves console cleanliness in production
  - Reduces unnecessary logging overhead

### Performance

- **Optimized rendering**: Wrapped component with React.memo to prevent unnecessary re-renders
  - Component now only re-renders when props actually change
  - Improves form load performance, especially with many section dividers
  - Added displayName for better debugging experience

### Changed

- Added React import for React.memo usage
- Component now uses React.memo for memoization

## [1.0.12] - Previous Release

Initial stable release with section divider functionality.
