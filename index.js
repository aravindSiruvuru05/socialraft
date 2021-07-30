import wixWindow from 'wix-window';

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w("#elementID")

    // Click "Preview" to run your code
    $w("#category").options = categories
    $w('#descriptionContent').text = ''
    $w('#pay').label = 'Pay'
    setTimeout(() => {
        $w('#text21').hide()
    }, 800)
    setTimeout(() => {
        $w('#category').show()
        $w('#services').show()
        $w('#plans').show()
        $w('#link').show()
    }, 1500)

});

import { createMyPayment, apiService } from 'backend/pay.jsw';
import wixPay from 'wix-pay';

$w.onReady(function () {
    setTimeout(() => {
        // $w('#text21').hide()
        $w('#category').show()
        $w('#services').show()
        $w('#plans').show()

    }, 500)
});

let currentCategory = ''
let currentService = ''
let currentQuantity = 0
let link = ''
let finalPrice = 0

// ============================= CATEGIRIRS

const categories = [
    { label: 'Facebook', value: 'facebook' },
    { label: 'Instagram', value: 'instagram' },
    { label: 'Youtube', value: 'youtube' },
    { label: 'Twitter', value: 'twitter' },
    { label: 'LinkedIn', value: 'linkedin' },
    { label: 'Club House', value: 'clubhouse' },
    { label: 'Mobile App Install', value: 'mobileappinstall' }
]

// ============================= SERIVICES

const facebookServices = [{ label: 'Page Likes', value: '251' }, { label: 'Page Likes + Followers', value: '4298' }, { label: 'Post/Photo likes', value: '3578' }, { label: 'Live Stream [ Watch 30 Minute ]', value: '4548' }];

const instaServices = [{ label: 'Likes', value: '362' }, { label: 'Followers', value: '3307' }, { label: 'Instagram - Followers - INDIA ', value: '4468' }, { label: 'Instagram - Mentions ~ User Followers', value: '247' }, { label: '⭐️ Instagram - Comment ~ Emoji ', value: '4601' }];

const youtubeServices = [{ label: '30 Min WatchTime -  Natural Recommended Views', value: '4858' }, { label: '60 Min WatchTime -  Natural Recommended Views', value: '4864' }, { label: 'Subscribers', value: '4487' }, { label: 'Views ~ Active Live Stream', value: '162' }, { label: 'Subscribers', value: 'subscribers' }, { label: 'Worldwide Views', value: '3225' }, { label: 'Indian Views', value: '4802' }];

const twitterServices = [{ label: 'Twitter - Followers ~ USA', value: '125' }, { label: 'Twitter - Likes ~ USA ~ Max 10k', value: '3250' }, { label: 'Twitter - Retweet', value: '95' }];

const linkedinServices = [{ label: 'Linkedin - Followers ~ Company Page ', value: '3263' }, { label: 'Yout3264 ~ Linkedin - Followers ~ Profile ~ Max 1m ~ 0ube Indian Views', value: '3264' }, { label: 'Linkedin - Connection ~ Max 5k ~ 0', value: '152' }, { label: ' ~ Linkedin - Post Share ~ Max 100k ~ 0', vale: '153' }];

const clubhouseServices = [{ label: 'Clubhouse - Followers ~ Max 10k ~ 𝐍𝐎 𝗥𝗘𝗙𝗜𝗟𝗟', value: '4435' }, { label: 'Clubhouse - Room Visitors', value: '4437' }];

const mobileappServices = [{ label: '1085 ~ Android - App Installs', value: '1085' }]

const websitetraficServices = [{ label: '🔍 WorldWide Traffic from Google.com [Organic]', value: '1210' }, { label: '⚡ WorldWide Traffic', value: '1211' }, { label: '⚡ WorldWide Traffic', value: '1213' }, { label: '🔍 India Traffic from Google.com [Organic]', value: '1376' }];

//==================================== PLANS

const plans = [{ label: '250', value: '250' }, { label: '500', value: '500' }, { label: '1000', value: '1000' }, { label: '2500', value: '2500' }, { label: '5000', value: '5000' }, { label: '10000', value: '10000' }, { label: '15000', value: '15000' }, { label: '25000', value: '25000' }, { label: '50000', value: '50000' }, { label: '100000', value: '100000' }]

// ====================================== PRICING

const prices = {
    '3307': 1,
    '362': 1,
    '4468': 1.2,
    '247': 2.5,
    '4601': 2.6,
    '251': 1.5,
    '4298': 2,
    '3578': 1.5,
    '4548': 2.5,
    '125': 5,
    '3250': 3,
    '95': 3,
    '3225': 1,
    '4802': 1.8,
    '162': 2,
    '4858': 2,
    '4864': 4,
    '4487': 6,
    '3981': 2,
    '3263': 4,
    '3264': 4,
    '152': 10,
    '153': 10,
    '4435': 1,
    '4437': 5,
    '1085': 12,
    '1210': 0.75
}

// ==================================== Description

const description = {
    '3307': {
        exLink: 'https://www.instagram.com/username/',
        content: `Start: INSTANT
                Refill: 400 days Refill`
    },
    '362': {
        exLink: 'https://www.instagram.com/p/CO6RVuUl5KR/?utm_medium=copy_link',
        content: `Start: Instant to 1 Hrs		
                Refill: Lifetime		
                Quality: Real Likes		
                Sometimes can be a delay, if you want to cancel, just open a ticket.		
                Make sure, your profile has a picture`,
    },
    '4468': {
        exLink: 'https://instagram.com/username',
        content: `Start: INSTANT
                Refill: 30 days
                Note: drop percentage has to be at least 5%-10% for the refill.`,
    },
    '247': {
        content: `Start: 0-72hrs 
            Refill: 30 days						
            - It will collect username from your given user on your order						
            - Make sure you don't order the same username for 2nd order, 
               bot can be collect same username list for order of the same username to collect list.						          
            - Please contact us for the quality of our mentions before you order big						
            - No refund after order delivered						
            ~ Start : 1-3 Days - Depend on In queue orders						
            ~ Unless the User deletes the comment/tag- our tag stay lifetime`,
        exLink: 'https://instagram.com/username'
    },
    '4601': {
        content: `Start: 0-10min
                Refill: 30 days`,
        exLink: 'https://instagram/p/asaoaskals211kasma'
    },
    '251': {
        exLink: 'https://www.facebook.com/pageusername',
        content: `Quality: 𝐇𝐢𝐠𝐡-𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝟏𝟎𝟎% 𝐑𝐞𝐚𝐥 𝐔𝐬𝐞𝐫
            Start: Instant - 3Hrs
            Refill: 𝟏𝟖𝟎 𝐃𝐚𝐲𝐬 𝐑𝐞𝐟𝐢𝐥𝐥`,
    },
    '4298': {
        exLink: 'https://www.facebook.com/pageusername',
        content: `Start: Instant within 0Hrs to 3 hrs (Please allow 24 hours)
            Guarantee: 180 Days Refill,`
    },
    '3578': {
        exLink: `Example Link: 𝐡𝐭𝐭𝐩://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐩𝐡𝐨𝐭𝐨.𝐩𝐡𝐩❓𝐟𝐛𝐢𝐝=𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱
                Example Link: 𝐡𝐭𝐭𝐩://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞/𝐩𝐨𝐬𝐭𝐬/𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱
                Example Link: 𝐡𝐭𝐭𝐩://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞/𝐯𝐢𝐝𝐞𝐨𝐬/𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱𝐱`,
        content: `Quality: 𝐇𝐢𝐠𝐡-𝐐𝐮𝐚𝐥𝐢𝐭𝐲 𝟏𝟎𝟎% 𝐑𝐞𝐚𝐥 𝐔𝐬𝐞𝐫	
            Start: Instant - 3Hrs	
            Refill: 𝟏𝟖𝟎 𝐃𝐚𝐲𝐬 𝐑𝐞𝐟𝐢𝐥l`
    },
    '4548': {
        exLink: 'https:///www.facebook.com/user/videos/ID',
        content: `Facebook Live Stream [ Watch 30 Minute ]
            Start: INSTANT		
            Speed: 1hrs Delivery		
            Refill: Not Required		
            Some reading notes to avoid losing money when using!		
            - After 3-5 minutes if Viewers not up, you can message us for support.		
            - The number of Viewers will stay about 80%-110% until the end of the minutes you register.		
            - Live Streaming packages Nonrefundable.`
    },
    '3225': {
        exLink: 'https://www.youtube.com/watch?v=zx-BAU4ezv8',
        content: `Start: INSTANT
                Refill: Lifetime
                Must be Unrestricted & Open for ALL countries`
    },
    '4802': {
        exLink: 'https://www.youtube.com/watch?v=zx-BAU4ezv8',
        content: `Youtube Indian Views
            Guarantee: LIfetime
            Start: INSTANT
            Speed: 10k-50k/days
            Refill: Lifetime
            Must be Unrestricted & Open for ALL countries`
    },
    '162': {
        exLink: 'Example Link: https://www.youtube.com/watch?v=zuHt9qJCxTg',
        content: `YouTube - Views ~ Active Live Stream
            RAV™ - Real Active Views**
            • INSTANT START
            • 100% Real Human YouTube Users Viewers!
            • Windows Desktop & Mobile Watch Page Views
            • 100% Unique Traffic that can be monetized!
            • World-Wide Viewers
            • Video must be Unrestricted & Open for ALL countries
            • Avg Concurrent and watch-time is based on livestream content
            • Cancel any Time with Full/Partial Refund
            • views can be delivered to an embed disabled livestream videos
            *Service offered as is with no refill/refund guarantee!`
    },
    '4858': {
        exLink: 'https://www.youtube.com/watch?v=zx-BAU4ezv8',
        content: `YouTube - 30 Min WatchTime -  Natural Recommended Views
            Start: 0-3 hrs, Speed: 4-7 days delivery, Refill: 30 days																							
            The system does not have its own counter, so it only relies on the number of views starting and ending on the video to calculate views. 
            In the process of running views, if the video gets natural views mixed with our views then we will not be responsible.													
            - Do not order multiple titles for one video at the same time.													
            - Use videos longer than 15 minutes for the best effect.													
            - Time per view: 15+ minutes. You need to balance the number of views you need to buy to get 4000 hours.													
            - If you use videos with length equal to or more than 15 minutes: 1000 views = 250+ hours of watch time Completion time 4000 hours.													
            - Example: Using 8 videos in the same channel. Each video orders more than 2000 views. It only takes 4 days to complete 4000 hours.`
    },
    '4864': {
        exLink: 'https://www.youtube.com/watch?v=zx-BAU4ezv8',
        content: `YouTube - 60 min WatchTime - Natural Recommended Views
            Start: 0-3 hrs, Speed: 4-7 days delivery, Refill: 30 days													               
            The system does not have its own counter, so it only relies on the number of views starting and ending on the video to calculate views. 
            In the process of running views, if the video gets natural views mixed with our views then we will not be responsible.													
            - Use videos longer than 60 minutes for the best effect.													
            - Time per view: 60+ minutes. You need to balance the number of views you need to buy to get 4000 hours.													
            - If you use videos longer than 1 hour : 1000 views = 1000+ hours of viewing													
            Tips : you can use multiple videos longer than 1 hour in the same channel so that the order can shorten the completion time. to 4000 hours.													
            - Example: Using 4 videos in the same channel. Each video order more than 1000 views. It only takes 2 days to complete 4000 hours.	`
    },
    '4487': {
        exLink: 'https://www.youtube.com/channel/UCYhvmzYNxCkGBaMhnsk69kg',
        content: `YouTube - Subscribers
            Start: Instant - 3 hours	
            Speed: 20-50/day	
            Refill: 30 days	
            Quality: Real YT Subscribers	
            Drop: 5%- 50% drop, can be more	`
    },
    '3981': {
        exLink: 'Full Video URL',
        content: `🇮🇳 YouTube Social Shares [ India ]
            ★ India Social Shares		
            ☆ Social Networks: Facebook, Twitter, Reddit, Pinterest, VK, Blogger and much more!		    
            ☑ Unique & Natural SEO for your Video		
            ☑ Help with Ranking		
            ☑ Safe for use! NO SPAM / BOTS methods		
            ☑ Lifetime Guaranteed - Non-Drop		
            ⚡ Speed 500+ Shares per day `
    },
    '125': {
        exLink: 'https://twitter.com/username',
        content: `Refill: 30 Days
            Start: Instant to 180 minutes
            Speed: 1k to 2k per 24 hours
            (Gradually slow adding to avoid drops)`
    },
    '3250': {
        exLink: 'https://twitter.com/Twitter/status/1416061700672040964/photo/1',
        content: 'Start: Instant to 180 minutes'
    },
    '95': {
        exLink: 'https://twitter.com/Twitter/status/1416061700672040964/photo/1',
        content: `Quality: 𝐑𝐄𝗔𝐋
            Refill: 30 days Guaranteed
            Start: 0-1 hours
            Speed: Up to 100/day (The average speed per day is 30-100!)
            𝐍𝐎𝐓𝐄: After the start, the order is not possible to cancel
            𝐍𝐎𝐓𝐄: When you change the link or block or hide the followers of the account, the order is marked completed!
            𝐍𝐎𝐓𝐄: Only refill - No partial No refund`
    },
    '3263': {
        exLink: 'https://www.linkedin.com/company/leadraft-marketing-pvt-ltd',
        content: `Quality: Mixed Country
            Speed: 200-500/days
            Guaranteed: 30 days guaranteed`
    },
    '3264': {
        exLink: 'https://www.linkedin.com/in/thammiraju-siruvuru-b10405144/',
        content: `Quality: Mixed Country
            Speed: 200-500/days
            Start: 0 to 12Hrs
            Guaranteed: 30 days guaranteed`
    },
    '152': {
        exLink: 'https://www.linkedin.com/in/thammiraju-siruvuru-b10405144/',
        content: `Quality: USA Country
            Quantity: Min 50, Max 5000
            Speed: 200-500/days
            Start: 0 to 12Hrs
            Guaranteed: 30 days guaranteed`
    },
    '153': {
        exLink: 'https://www.linkedin.com/feed/update/urn:li:activity:6826778344525307904/',
        content: `Quality: USA Country
            Speed: 200-500/days
            Start: 0 to 12Hrs
            Guaranteed: 30 days guaranteed`
    },
    '4435': {
        exLink: 'Username only plz',
        content: `Clubhouse - Followers ~ Max 10k ~ 𝐍𝐎 𝗥𝗘𝗙𝗜𝗟𝗟
                Location: Mixed
                Quality: Real
                Start: 0-60 Minutes
                Refill: No Refill`
    },
    '4437': {
        exLink: 'https://www.joinclubhouse.com/room/MwYrQEBY',
        content: `Clubhouse - Room Visitors
            They will stay in the room for 15min to 1 hrs
            Location: Mixed
            Quality: Real & Bot
            Start: 0-60 Minutes
            Speed: 2.5k/days
            Refill: No Refill
            𝐍𝐎𝐓𝐄:
            • Depending on the density, it may rarely send late.
            • No transactions are made to confidential accounts.
            • Do not take the 2nd order on the same link before the order is finished`
    },
    '1085': {
        exLink: 'App Link',
        content: `1085 ~ Android - App Installs
            App must be available free on the play store worldwide.
            Real Installs/Rating from real users/devices
            It needs 24-48 hrs to show stats
            Never drop. If drop we will refill !`
    },
    '1210': `🔍 WorldWide Traffic from Google.com [Organic]
            💡 Use a bit.ly link to track traffic
            💡 Keyword can be added in any language

            ✅ Organic Keyword Traffic from Google.com Search
            ✅ Add Your Own Custom Keyword (See below how to add it)
            ✅ 100% Real & Unique Visitors
            ✅ Google Analytics Supported

            🕒 Session Length: 40-60 Seconds per visit
            ⬇️ Bounce Rates: Low
            ⚡️ Speed: 10,000 unique visitors per day
            🏁 Start Time: 0-12h (we check all links for compliance)

            🖥️ Desktop Traffic Over 90%
            📱 Mobile Traffic Under 10%

            ⚠️ No Adult, Drug or offensive websites allowed

            📝 URL and KEYWORD Format:

            Add your URL and keyword in to the link field with a separator. For example:
            https://www.domain.com:keyword
            or
            http://bit.ly/xyz:keyword longtail
            1 (ONE) keyword per order. To use multiple keywords create another order for the same URL using a different keyword.`,
    '1211': `⚡ WorldWide Traffic
            💡 Use a bit.ly link to track traffic
            ✅ 100% Real & Unique Visitors
            ✅ Google Analytics Supported
            🕒 Session Length: 40-60 Seconds per visit
            ⬇️ Bounce Rates: Low
            ⚡️ Speed: 10,000 unique visitors per day
            🏁 Start Time: 0-12h (we check all links for compliance)
            🖥️ Desktop Traffic Over 90%
            📱 Mobile Traffic Under 10%
            ⚠️ No Adult, Drug or offensive websites allowed
            🔗 Link Format: Enter Full Website URL`,
    '1213': `⚡ WorldWide Traffic
            💡 Use a bit.ly link to track traffic

            ✅ 100% Real & Unique Visitors
            ✅ Google Analytics Supported

            🕒 Session Length: 40-60 Seconds per visit
            ⬇️ Bounce Rates: Low
            ⚡️ Speed: 10,000 unique visitors per day
            🏁 Start Time: 0-12h (we check all links for compliance)

            🖥️ Desktop Traffic Over 90%
            📱 Mobile Traffic Under 10%

            ⚠️ No Adult, Drug or offensive websites allowed
            🔗 Link Format: Enter Full Website URL`,
    '1376': `🔍 India Traffic from Google.com [Organic]
            💡 Use a bit.ly link to track traffic
            💡 Keyword can be added in any language

            ✅ Organic Keyword Traffic from Google.com Search
            ✅ Add Your Own Custom Keyword (See below how to add it)
            ✅ 100% Real & Unique Visitors
            ✅ Google Analytics Supported

            🕒 Session Length: 40-60 Seconds per visit
            ⬇️ Bounce Rates: Low
            ⚡️ Speed: 10,000 unique visitors per day
            🏁 Start Time: 0-12h (we check all links for compliance)

            🖥️ Desktop Traffic Over 90%
            📱 Mobile Traffic Under 10%

            ⚠️ No Adult, Drug or offensive websites allowed

            📝 URL and KEYWORD Format:

            Add your URL and keyword in to the link field with a separator. For example:
            https://www.domain.com:keyword
            or
            http://bit.ly/xyz:keyword longtail

            1 (ONE) keyword per order. To use multiple keywords create another order for the same URL using a different keyword.`

}

const discount = {
    '250': 0,
    '500': 5,
    '1000': 7.5,
    '2500': 10,
    '5000': 12,
    '10000': 14,
    '15000': 16,
    '25000': 16,
    '50000': 17,
    '100000': 18
}

const populateServices = (selected) => {
    $w('#publicText').hide()

    switch (selected) {
    case 'facebook': {
        $w('#services').options = facebookServices;
        break;
    }
    case 'instagram': {
        $w('#services').options = instaServices;
        $w('#publicText').show()
        break;
    }
    case 'youtube': {
        $w('#services').options = youtubeServices;
        break;
    }
    case 'twitter': {
        $w('#services').options = twitterServices;
        break;
    }
    case 'linkedin': {
        $w('#services').options = linkedinServices;
        break;
    }
    case 'clubhouse': {
        $w('#services').options = clubhouseServices;
        break;
    }
    case 'mobileappinstall': {
        $w('#services').options = mobileappServices;
        break;
    }
    }
    $w('#services').selectedIndex = null

    $w('#plans').selectedIndex = null
    $w('#plans').options = []
    $w('#pay').disable()
}

const populatePlans = (selected) => {
    $w('#plans').options = plans
    $w('#plans').selectedIndex = null
}

const priceCalculator = () => {
    const quantity = currentQuantity
    const cp = (quantity * prices[currentService])
    const dis = ((quantity * prices[currentService]) / 100) * discount[quantity]
    const sp = Math.ceil(cp - dis)

    const finalPriceDisplayEle = $w('#text21')
    const payButtonEle = $w('#pay')
    if (Number.isInteger(sp) && sp > 0) {
        finalPrice = sp
        finalPriceDisplayEle.text = `Your Total price is ${sp}rs/- Only`
        finalPriceDisplayEle.show()
        payButtonEle.label = `Pay ${sp} rs/-`
        payButtonEle.enable()
    } else {
        finalPrice = 0
        finalPriceDisplayEle.text = ''
        console.log(finalPriceDisplayEle.text)
        finalPriceDisplayEle.hide()
        payButtonEle.label = 'Pay'
        payButtonEle.disable()
    }

}

export function category_change(event) {
    const selected = event.target.value
    currentCategory = selected
    populateServices(selected)
    currentQuantity = 0
    $w('#descriptionContent').text = ''
    $w('#exampleLinkHeading').hide()
    $w('#exLink').hide()
    priceCalculator()
}

export function services_change(event) {
    const selected = event.target.value
    currentService = selected
    populatePlans(selected)
    currentQuantity = 0
    $w('#descriptionContent').text = description[selected]?.content
    $w('#exLink').text = description[selected]?.exLink
    $w('#exampleLinkHeading').show()
    $w('#exLink').show()
    priceCalculator()
}

export function plans_change(event) {
    currentQuantity = parseInt(event.target.value)
    priceCalculator()
}

export function link_blur(event) {
    priceCalculator()
    // This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
    // Add your code for this event here: 
}

export function link_change(event) {
    console.log(event.target.value)
    // This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
    // Add your code for this event here: 
}

const handlePaymentSuccess = async () => {
    const body = {
        "link": link,
        "service": parseInt(currentService),
        "action": "add",
        "key": "6daa2a232875c4142d4442a05183abbd",
        "quantity": currentQuantity
    }
    const res = await apiService(body)
    console.log(res)
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function pay_click(event) {
    link = $w('#link').value
    if (link.length === 0) {
        setTimeout(() => { // need timeout to let input1 field update its value
            wixWindow.openLightbox("Required", '')
                .then((data) => {
                    // if (data === null || data === undefined) {
                    //     $w('#text3').text = "Hey " + $w('#input1').value + ", you sure you don't want to give it a try?";
                    // } else if (data.result === "won") {
                    //     $w('#text3').text = "Way to go " + $w('#input1').value + "! How about testing your luck again?";
                    // } else {
                    //     $w('#text3').text = "Sorry " + $w('#input1').value + ". Why not give it another shot?";
                    // }
                });
        }, 5); // 10 milliseconds works for me
        return
    }
    const payButtonEle = $w('#pay')
    const payLabel = payButtonEle.label
    payButtonEle.label = 'Processing ...'
    if (Number.isInteger(finalPrice) && finalPrice > 0) {

        createMyPayment(1)
            .then((payment) => {
                wixPay.startPayment(payment.id)
                    .then(async (result) => {
                        if (result.status === "Successful") {
                            payButtonEle.label = payLabel
                            handlePaymentSuccess()
                        } else if (result.status === "Failed") {
                            console.log('failed')
                            payButtonEle.label = payLabel
                            // handle payment failure
                        } else if (result.status === "Pending") {
                            console.log('pending')
                            payButtonEle.label = payLabel
                            // handle payment pending
                        } else if (result.status === "Cancelled") {
                            console.log('cancled')
                            payButtonEle.label = payLabel
                            // handle user closing payment panel
                        }
                    });
            });
    }
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/

/**
 *	Adds an event handler that runs when the element loses focus.
 *	 @param {$w.Event} event
 */
