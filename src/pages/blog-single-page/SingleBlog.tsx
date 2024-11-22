import React, { useEffect, useState } from 'react';
import './SingleBlog.scss'; 
import { useParams } from 'react-router-dom';
import { Blog } from '../../types/interface';
import getSingleBlog from '../../services/blogs/getSingleBlog';

const SingleBlog = () => {

    const { blogId: blogIdParam } = useParams<{ blogId: string }>();
    const blogId = parseInt(blogIdParam || '', 10);

    const [blog, setBlog] = useState<Blog>();

    const [text, setText] = useState<string>("\n<p><strong>Unique. Original. Remarkable. It’s difficult to develop real estate marketing ideas day in and day out that meet each of these criteria — especially when you spend much of your time on the road meeting with clients and leads.</strong></p>\n\n\n\n<p></p>\n\n\n\n<h3 class=\"wp-block-heading\"><strong>The Importance of Time Management:</strong></h3>\n\n\n\n<p></p>\n\n\n\n<p>‍The success of your real estate business depends on how well your online marketing funnel attracts new home buyers. 44% of all home buyers and 99% of Millennials go to the Internet first when finding properties for sale. As a real estate professional, you need a professional website if you expect to increase revenue over time.</p>\n\n\n\n<p>‍</p>\n\n\n\n<p>Home buyers expect quality as they search for homes and the REALTOR® that best fits their needs. Your website should showcase your property listings, brand and expertise. Tools that help you stand out include:</p>\n\n\n\n<p></p>\n\n\n\n<ul class=\"wp-block-list\">\n<li>Branded messaging and images</li>\n\n\n\n<li>Responsive design</li>\n\n\n\n<li>IDX integration</li>\n\n\n\n<li>Blog content</li>\n\n\n\n<li>Lead capture landing pages</li>\n\n\n\n<li>Area pages</li>\n</ul>\n\n\n\n<p>‍</p>\n\n\n\n<figure class=\"wp-block-image image\"><img decoding=\"async\" src=\"https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670cf27bf69f3d6990935eae_670cf16b148dd6952acf78c5_image%2520(26).png\" alt=\"man with the child\" style=\"aspect-ratio:16/9;object-fit:cover\"/></figure>\n\n\n\n<p></p>\n\n\n\n<p><strong>Practical Tips for Improving Time Management:</strong></p>\n\n\n\n<p></p>\n\n\n\n<ol class=\"wp-block-list\">\n<li>If you’ve ever checked out BuzzFeed before, then you know people like to take quizzes on just about any subject. Test your audience with a short, multiple-choice quiz on something of interest. See if they know things like which famous people grew up in the area and tidbits about your town’s history. The questions or topics can even be created around broader subjects unrelated to your market, like music, movies, or some other facet of pop culture.</li>\n\n\n\n<li>Creating a website provides a digital hub for interested buyers to learn more about available properties. They’ll also be able to learn about your real estate agency or agent who is representing them.</li>\n\n\n\n<li>Pro tip: Whether you work at a brokerage or have your own firm, creating a website is a great way to grow your personal brand, show positive reviews from clients you’ve helped, and continue bringing in more qualified leads.</li>\n\n\n\n<li>A blog allows you to demonstrate industry expertise, establishing credibility with potential clients. Blogs also create an outlet for sharing industry news, events, and advice for potential clients. You can stay top of mind for your audience, so they think of you when it&#8217;s time to buy.</li>\n</ol>\n\n\n\n<p></p>\n\n\n\n<p><strong>Develop email marketing campaigns.</strong></p>\n\n\n\n<p></p>\n\n\n\n<ol class=\"wp-block-list\">\n<li>Send a monthly newsletter roundup of your blog content, and reach out to contacts when new property listings are available. Include images of the properties that link to the full listing, a video walkthrough of the property, or a virtual staging of the home.</li>\n\n\n\n<li>Creating email marketing campaigns lets you connect with past and potential clients in real estate marketing. By keeping in touch, agents can stay top of mind with their audience, increasing the chances of receiving referrals or securing repeat business.</li>\n\n\n\n<li>Virtual buyers can envision themselves in a potential new home before visiting the property. By presenting a virtual representation of a furnished property, they can better understand how to use the space and what it would look like if they lived there.</li>\n</ol>\n\n\n\n<p></p>\n\n\n\n<figure class=\"wp-block-image image\"><img decoding=\"async\" src=\"https://cdn.prod.website-files.com/66f262050f96e0f9e1e456b4/670cf27af69f3d6990935ea4_670cf21af46d84ec76c1ac85_image%2520(27).png\" alt=\"man with the lady\" style=\"aspect-ratio:16/9;object-fit:cover\"/></figure>\n\n\n\n<p></p>\n\n\n\n<h2 class=\"wp-block-heading\"><strong>Paid Instagram promotions allow agents to target their ideal audience with precision. Instagram ads can target specific demographics, ensuring the most relevant audience sees the ad.</strong></h2>\n\n\n\n<p></p>\n\n\n\n<p><strong>Pro tip: Video ads on Instagram or TikTok aren’t just great for promoting listings — they also give you a chance to show your personality and build credibility with potential clients.</strong></p>\n\n\n\n<p></p>\n\n\n\n<p><strong>Conclusion</strong></p>\n\n\n\n<p><br>Make yourself and your knowledge available to the community by hosting mini-seminars. Consider providing a basic 101 seminar about the basics of home buying and mortgages.</p>\n\n\n\n<p></p>\n\n\n\n<p>Remember, marketing today is all about inbound, and that doesn’t just apply online. Users want you to share some of your knowledge for free before investing time and money in you. A home buying seminar is the local equivalent of a webinar. Yes, it will take time and energy, but attendees will walk away impressed and will have established a relationship with you. That relationship will be worth its weight in gold when they’re ready to shop for a home.</p>\n\n\n\n<p></p>\n");

    const getBlogData = () => {
        if (!isNaN(blogId)) {
            getSingleBlog({
                blogId,
                setBlog,
            });
        }
    };

    useEffect(() => {
        console.log(blogId);
        getBlogData();
    }, [blogId]);

    return (
        <div className='single-blog'>
            <div className='single-blog-inner'>
                <div dangerouslySetInnerHTML={{ __html:blog?.content || ""}}></div>
            </div>
        </div>
    );

}

export default SingleBlog;
