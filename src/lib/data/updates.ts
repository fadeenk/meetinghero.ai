export interface Update {
	date: Date;
	title: string;
	update: string;
	version: string;
}

export const updates: Update[] = [
	{
		date: new Date('2025-07-15T00:00:00-07:00'),
		version: '1.1.0',
		title: 'AI Update',
		update: `
    <p>Upgraded the AI model to the latest version</p>
    `
	},
	{
		date: new Date('2025-07-08T00:00:00-07:00'),
		version: '1.0.1',
		title: 'Calendar Sync Fix',
		update: `
    <p>Resolved a critical issue where calendar sync was not working for users with multiple subscriptions</p>
    <p>Introduce delay after the first sync to ensure all data is available before delivering the first meeting prep</p>
    `
	},
	{
		date: new Date('2025-05-17T00:00:00-07:00'),
		version: '1.0.0',
		title: '🚀 Official Launch 🚀',
		update: `<p class="text-h6 text-accent">New Features:</p>
    <ul style="padding-left: 20px; margin-bottom: 10px;list-style-type:circle">
      <li>I've completely redesigned the delivery system to provide you with unprecedented control over your meeting intelligence delivery preferences. <br/>
      The updated settings interface offers clearer options and new customization features to tailor when and how you receive your meeting insights.</li>
      <div class="image-comparison" data-before="/whatsNew/deliveryBefore.png" data-after="/whatsNew/deliveryAfter.png"></div>
      <li>Enhanced the news section with article thumbnails for improved visual engagement</li>
      <li>Implemented pagination in the news section, allowing users to browse through an expanded collection of relevant articles</li>
      <div class="image-comparison" data-before="/whatsNew/newsBefore.png" data-after="/whatsNew/newsAfter.png"></div>
      <li>Unlock personalized meeting views with the new advanced filtering system - tailor your preparation experience to match your preferences</li>
      <div style="text-align: center; margin: 1rem 0;">
        <img src="/whatsNew/filter.png" style="max-width: 100%; display: inline-block;" />
      </div>
    </ul>
    <p class="text-h6 text-accent">Improvements:</p>
    <ul style="padding-left: 20px; margin-bottom: 10px;list-style-type:circle">
      <li>Streamlined the onboarding process: affiliate link signups now automatically pre-fill the referral source question</li>
      <li>Improved onboarding experience with instant meeting preparation delivery - get your first insights within 60 seconds of calendar sync</li>
      <li>Updated the login screen to include a Terms of Service and Privacy Policy links</li>
      <div class="image-comparison" data-before="/whatsNew/loginBefore.png" data-after="/whatsNew/loginAfter.png"></div>
    </ul>
    <p class="text-h6 text-accent">Bug Fixes:</p>
    <ul style="padding-left: 20px; margin-bottom: 10px;list-style-type:circle">
      <li>Resolved a critical issue where subscription cancellations weren't properly reflecting in the application interface</li>
      <li>Resolved a rare edge case where weather information was not properly displaying in meeting preparations</li>
    </ul>
    <p class="text-h6 text-accent">Changes:</p>
    <ul style="padding-left: 20px; margin-bottom: 10px;list-style-type:circle">
      <li>Lite plan new pricing takes effect.</li>
    </ul>

      `
	},
	{
		date: new Date('2025-05-15T00:00:00-07:00'),
		version: '0.4.5',
		title: 'Enhanced User Experience',
		update: `<p>Introducing advanced filtering options in settings: now customize your meeting prep by toggling weather, discussion points, and location information</p>
      <p>Refined the version number display in the login page footer for better visibility</p>
      <p>Implemented a powerful search functionality for profiles</p>
      <p>Completely redesigned the profiles list interface for improved usability</p>
      <p>Resolved an edge case where non-existent profiles were occasionally appearing in the interface</p>
      `
	},
	{
		date: new Date('2025-05-14T00:00:00-07:00'),
		version: '0.4.4',
		title: 'System Stability Improvements',
		update: `<p>Resolved a rare edge case where weather information processing could prevent meeting prep generation</p>
      <p>Resolved a rare edge case where weather information was not properly displaying in meeting preparations</p>
      `
	},
	{
		date: new Date('2025-05-12T00:00:00-07:00'),
		version: '0.4.3',
		title: 'Data Display Fixes',
		update: `<p>Fixed a critical issue affecting the display of company investor information in both calendar and email meeting preparations</p>
      `
	},
	{
		date: new Date('2025-05-09T00:00:00-07:00'),
		version: '0.4.2',
		title: 'User Experience Enhancements',
		update: `<p>Implemented persistent storage and display of company summary sources within their respective sections</p>
      <p>Enhanced the quota notification banner with more informative messaging for users who have reached their limit</p>
      `
	},
	{
		date: new Date('2025-05-08T00:00:00-07:00'),
		version: '0.4.1',
		title: 'AI Person Identification Enhancement',
		update: `<p>Introducing a new feature that allows you to refine person information for improved AI identification accuracy. Simply update the person's name, and the AI will automatically enhance the identification process.</p>
      <img src="/whatsNew/guideAI.png" style="width: 100%" />
      <p>Resolved inconsistencies in funding number displays across various sections</p>
      <p>Enhanced the visual presentation of sources in the company funding section</p>
      `
	},
	{
		date: new Date('2025-05-07T00:00:00-07:00'),
		version: '0.4.0',
		title: 'Advanced AI Intelligence',
		update: `<p>Upgraded to a more sophisticated AI model for enhanced intelligence and accuracy</p>
      <p>Added source attribution to AI-generated content for improved transparency and learning</p>
      <p>Enhanced meeting prep emails with relevant source information</p>
      <p>Implemented more accurate company funding information with source verification</p>
      <p>Advanced AI logic for superior person and company identification</p>
      <p>Major improvements to discussion points:<br />
      <img src="/whatsNew/discussionPointsUpgraded.png" style="width: 100%" />
        <ul style="padding-left: 20px;">
          <li>Introduced categorization and tagging system for discussion points</li>
          <li>Added powerful filtering capabilities for discussion points</li>
          <li>Integrated source attribution for discussion points</li>
          <li>New feature: regenerate discussion points with additional context for AI refinement</li>
        </ul>
      </p>
      <p>Resolved an issue where shared profiles were missing discussion points</p>
      `
	},
	{
		date: new Date('2025-04-26T00:00:00-07:00'),
		version: '0.3.2',
		title: 'Talking Points Enhancement',
		update: `<p>Optimized the talking points generation algorithm for more relevant and engaging conversation starters</p>
      <p>Fixed navigation links for discussion points to correctly direct to person profile pages</p>
      `
	},
	{
		date: new Date('2025-04-25T00:00:00-07:00'),
		version: '0.3.1',
		title: 'Interface Refinements',
		update: `<p>Standardized name display in meeting prep for both calendar and email formats</p>
      <p>Optimized email meeting prep layout for users with weather data enabled</p>
      <p>Implemented demo mode to accelerate feature development and testing</p>
      <p>Enhanced meeting list view with clear labeling for past and cancelled meetings</p>
      <p>Expanded onboarding experience with comprehensive trial information</p>
      <p>Added version tracking for better system management</p>
      `
	},
	{
		date: new Date('2025-04-19T00:00:00-07:00'),
		version: '0.3.0',
		title: 'AI-Powered Talking Points',
		update: `<p>Introducing AI-generated talking points for profiles!</p>
      <p>New section added to person profile pages (emails and calendar events) featuring AI-generated personalized discussion prompts for your meetings</p>
      <p>Enhanced the person profile page with refined UI improvements</p>`
	},
	{
		date: new Date('2025-04-18T00:00:00-07:00'),
		version: '0.2.2',
		title: 'Usage Analytics Enhancement',
		update: `<p>Resolved critical issues in usage tracking accuracy</p>
      <p>Streamlined the onboarding process by removing credit card requirement for trial initiation</p>`
	},
	{
		date: new Date('2025-04-15T00:00:00-07:00'),
		version: '0.2.1',
		title: 'Comprehensive Platform Improvements',
		update: `<p>Enhanced social media sharing functionality for profiles. Here's how it appears when shared:</p>
      <img src="/whatsNew/fb.png" style="width: 100%" />
      <p>Preview the optimized display across all social media platforms <a href="/whatsNew/socialMedia.png" target="_blank">here</a>. Additional improvements include:</p>
      <ul style="padding-left: 20px; margin: 0;">
        <li style="margin-bottom: 8px;">Resolved initial loading issues with shared profiles</li>
        <li style="margin-bottom: 8px;">Fixed name display issues when sharing from mobile devices</li>
        <li style="margin-bottom: 8px;">Restricted "What's New" access to authenticated users only</li>
        <li style="margin-bottom: 8px;">Optimized internal development processes for faster updates</li>
        <li style="margin-bottom: 8px;">Eliminated empty section displays in profile pages</li>
        <li style="margin-bottom: 8px;">Enhanced error tracking and reporting</li>
      </ul>`
	},
	{
		date: new Date('2025-04-14T00:00:00-07:00'),
		version: '0.2.0',
		title: 'Universal Meeting Prep Access',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Introducing universal sharing capabilities for meeting preparations</li>
      <p>Share your meeting prep effortlessly by clicking the share button in the top right corner of the meeting prep page, adjacent to your profile picture</p>
      <img src="/whatsNew/share.png" style="width: 100%" />
      <p>Shared links are now accessible to anyone, regardless of MeetingHero account status</p>
      </ul>`
	},
	{
		date: new Date('2025-04-13T00:00:00-07:00'),
		version: '0.1.4',
		title: 'System Optimizations',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Enhanced settings save button with improved loading states and validation</li>
      <li style="margin-bottom: 8px;">Enforced delivery method requirement validation</li>
      <li style="margin-bottom: 8px;">Resolved Microsoft authentication integration issues</li>
      <li style="margin-bottom: 8px;">Fixed news and funding information display issues</li>
      <li style="margin-bottom: 8px;">Completed Microsoft application approval requirements</li>
      </ul>`
	},
	{
		date: new Date('2025-04-09T00:00:00-07:00'),
		version: '0.1.3',
		title: 'System Performance Optimization',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Implemented randomized intervals for scheduled jobs</li>
      <li style="margin-bottom: 8px;">Optimized system resource allocation by preventing concurrent job execution</li>
      </ul>`
	},
	{
		date: new Date('2025-04-08T00:00:00-07:00'),
		version: '0.1.2',
		title: 'Update Communication System',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Implemented an in-app update notification system</li>
      <li style="margin-bottom: 8px;">Personalized update feed showing only relevant new features</li>
      </ul>`
	},
	{
		date: new Date('2025-04-07T00:00:00-07:00'),
		version: '0.1.1',
		title: 'Usage Analytics Enhancement',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Fixed chronological ordering in billing chart usage display</li>
      <li style="margin-bottom: 8px;">Implemented intelligent usage notifications at key thresholds (50%, 75%, 90%, 100%)</li>
      </ul>`
	},
	{
		date: new Date('2025-04-01T00:00:00-07:00'),
		version: '0.1.0',
		title: 'Weather Integration',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Integrated real-time weather information into user profiles at meeting times</li>
      <li style="margin-bottom: 8px;">Added weather data to meeting preparation emails</li>
      <li style="margin-bottom: 8px;">Included concise weather information in calendar events</li>
      </ul>`
	},
	{
		date: new Date('2025-03-31T00:00:00-07:00'),
		version: '0.0.9',
		title: 'Administrative Tools',
		update: `<ul style="list-style-type: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 8px;">Launched comprehensive affiliate marketing management system</li>
      <li style="margin-bottom: 8px;">Implemented advanced administrative dashboard and tools</li>
      </ul>`
	}
];
