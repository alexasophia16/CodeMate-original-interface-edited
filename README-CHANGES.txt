CodeMate - Original Interface + Additive Role Features
=====================================================
This package is based on the ORIGINAL separate CodeMate files you uploaded.
The accidentally uploaded Claude prototype HTML was intentionally excluded.

Kept:
- Existing base/sidebar/topbar styling
- Existing dashboard layout, stat cards, charts, Featured Tutors structure
- Existing Find Tutor, Tutor Profile, Booking, My Bookings, Discussions, Messages, Login/Signup files
- Existing mock data wherever available

Edited minimally:
- sidebar.js: adds Tutor navigation by role; keeps existing Tutee/Admin markup
- dashboard.js: keeps the same dashboard UI but changes content/data by role
- messages.js: Admin is read-only
- incorrect Dashboard links in several original pages now point to dashboard.html

Added:
- Tutor profile management, tutoring slots, booking requests, reviews
- Admin tutor verification, user management, course management, moderation, reports
- Resources page / tutor mock upload
- mock-reviews.json and small mock datasets required by new pages
- role-pages.css, which uses the existing CodeMate design variables

No backend/payment system was added. Front-end actions use localStorage where needed.
