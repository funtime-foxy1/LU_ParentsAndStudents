/**
 * ---------- HOW TO ADD YOUR OWN SECTION ----------
 * Process is a little complicated but here is how it goes: (REQUIRES BASIC HTML and JS KNOWLEDGE)
 * 
 * 1. Create a new variable
 * 2. Fill it out based on the format used in the others
 * 3. Add a new <fieldset> component in the HTML file and give it a new id and legend
 * 4. Copy one of the existing for loops in the loadAllCards() function
 * 5. Modify the list and the getElementById()
 * 6. Your done!
 */

const allElementary = [
    // {
    //     "title": "",
    //     "desc": ``,
    //     "url": ""
    // },
    {
        "title": "Student Handbook",
        "desc": `Developed to provide specific information about certain policies and procedures.`,
        "url": "https://drive.google.com/file/d/1TuVL9eFb7MgfX61v3T_yOk0cM6HMzvBV/view?usp=sharing"
    },
    {
        "title": "Parent Portal",
        "desc": `Enroll your children, complete and update yearly Emergency Medical and other back-to-school forms.`,
        "url": "https://docs.google.com/document/d/13VLCmUdWegpjmP3mMysm5IbKJoJ10caZR_rc-cZ-yfU/edit?usp=sharing"
    },
    {
        "title": "OneCall Self-Update",
        "desc": `A secure, convenient tool to keep your contact information up-to-date`,
        "url": "https://www.mycallnow.com/"
    },
    {
        "title": "Computer Agreement",
        "desc": `This document explains and defines Liberty Union’s technology use policies for staff, students, and visitors of Liberty Union.`,
        "url": "https://docs.google.com/document/d/1OFBPDqvWuYTWmN7S3NNGng5cpULBRq7tWAdyaXUMBRo/edit?usp=sharing"
    },
    {
        "title": "Progressbook",
        "desc": `A place to find you or your students info.`,
        "url": "https://pa.metasolutions.net/"
    },
    {
        "title": "Harassment Form",
        "desc": `Use this form to report any acts of suspected bullying, harassment and intimidation related to a Liberty Union Schools student.`,
        "url": "https://forms.gle/zW94iGYsDGQAHbFN9"
    },
    {
        "title": "Health & Wellness",
        "desc": `To find info about treating health in school.`,
        "url": "https://drive.google.com/drive/folders/1nWe4yrcJKt21LrKAzMFpfaGBx8rQWa5E"
    },
    {
        "title": "Vacation Request",
        "desc": `The form for vacations, make sure to contact the office!`,
        "url": "https://docs.google.com/forms/d/e/1FAIpQLScECHU4ptrfHPuQ2zyB3l62eSLg3MF4Mq4RoIWL5bByYSGbKg/viewform"
    },
    {
        "title": "Volunteer Application",
        "desc": `Thank you for your interest in providing a superior learning experience for our students!`,
        "url": "https://docs.google.com/forms/d/e/1FAIpQLScrBVes_FwsQN9meYh6RYo-6GFd74QpFSy0QhFmSQsdW8CDcg/viewform"
    },
    {
        "title": "Standards-Based Report Cards",
        "desc": `Info about report cards and what to see on them.`,
        "url": "https://www.libertyunion.org/Standards-basedReportCards.aspx"
    },
    {
        "title": "ROAR Information",
        "desc": `The vision and language to lead the school in a way that addresses all areas of development.`,
        "url": "https://www.libertyunion.org/ROARInformation.aspx"
    },
    {
        "title": "Learning steps",
        "desc": `How to get started with LU Preschool!`,
        "url": "https://www.libertyunion.org/1.aspx"
    },
    {
        "title": "Early Entrance into Kindergarten",
        "desc": `Gifted infomation.`,
        "url": "https://www.libertyunion.org/EarlyEntrytoKindergarten.aspx"
    },
    {
        "title": "Departmentali-<br>zation",
        "desc": `The process of grouping activities into content or subject area departments.`,
        "url": "https://docs.google.com/document/d/1D-8oivOrTOHOwtsNYsQbQcXCKIqZdKesRjAVjJUIQnE/edit"
    },
    {
        "title": "Drop off info",
        "desc": `Drop off location and procedures.`,
        "url": "https://drive.google.com/file/d/19xiFuNJTkUzZD0wRywQFW4XOtMjQpv-_/view?usp=sharing"
    },
    {
        "title": "Pick up info",
        "desc": `Pick up location and procedures.`,
        "url": "https://drive.google.com/file/d/19wdQOncslQJ5uXawMmAqvdcS1sbUKWeC/view?usp=sharing"
    },
]
const allMiddle = [
    {
        "title": "Student Handbook",
        "desc": `Developed to provide specific information about certain policies and procedures.`,
        "url": "https://drive.google.com/file/d/1TmetfDTWyB57-p7qqy5wVh-LhSjpmMhe/view?usp=sharing"
    },
    {
        "title": "Parent Portal",
        "desc": `Enroll your children, complete and update yearly Emergency Medical and other back-to-school forms.`,
        "url": "https://docs.google.com/document/d/13VLCmUdWegpjmP3mMysm5IbKJoJ10caZR_rc-cZ-yfU/edit?usp=sharing"
    },
    {
        "title": "OneCall Self-Update",
        "desc": `A secure, convenient tool to keep your contact information up-to-date`,
        "url": "https://www.mycallnow.com/"
    },
    {
        "title": "Computer Agreement",
        "desc": `This document explains and defines Liberty Union’s technology use policies for staff, students, and visitors of Liberty Union.`,
        "url": "https://docs.google.com/document/d/1OFBPDqvWuYTWmN7S3NNGng5cpULBRq7tWAdyaXUMBRo/edit?usp=sharing"
    },
    {
        "title": "Progressbook",
        "desc": `A place to find you or your students info.`,
        "url": "https://pa.metasolutions.net/"
    },
    {
        "title": "Harassment Form",
        "desc": `Use this form to report any acts of suspected bullying, harassment and intimidation related to a Liberty Union Schools student.`,
        "url": "https://forms.gle/zW94iGYsDGQAHbFN9"
    },
    {
        "title": "Health & Wellness",
        "desc": `To find info about treating health in school.`,
        "url": "https://drive.google.com/drive/folders/1nWe4yrcJKt21LrKAzMFpfaGBx8rQWa5E"
    },
    {
        "title": "Kroger Rewards",
        "desc": `Giving positive social impact and charitable giving at the national and local levels.`,
        "url": "https://www.kroger.com/i/community/community-rewards"
    },
    {
        "title": "Vacation Request",
        "desc": `The form for vacations, make sure to contact the office!`,
        "url": "https://drive.google.com/file/d/1T_oS5HXGJzVXwI64AlpSHzmp4jBY-qtU/view?usp=drive_link"
    },
    {
        "title": "Counselor Page",
        "desc": `The school counselor at Liberty Union-Thurston Middle School.`,
        "url": "https://www.libertyunion.org/SchoolCounselorsMessage.aspx"
    },
    {
        "title": "Parent-Teacher Organization",
        "desc": `Join us in making this school year the best that it can be for our students.`,
        "url": "https://drive.google.com/file/d/1KdXKWa4GUVh0OtMBLvgF63k8W5ZQqyks/view?usp=sharing"
    },
    {
        "title": "Backpack for buddies",
        "desc": `Students in this progress will receive food items two weekends a month.`,
        "url": "https://drive.google.com/file/d/11qKVP3dFuBPoPSJQYBdo7vEt_TS6RJ_Z/view?usp=drive_link"
    },
    {
        "title": "Parent Volunteer Info",
        "desc": `The form for volunteering in all sorts of activites!`,
        "url": "https://drive.google.com/file/d/1JQTEfjyvxZA2F2jrhUpyY26xrnBfq5Pc/view?usp=drive_link"
    },

]
const allHigh = [
    {
        "title": "Student Handbook",
        "desc": `Developed to provide specific information about certain policies and procedures.`,
        "url": "https://drive.google.com/file/d/14miflxlWSxgqtpJ6glBHo67VDqhp7ArC/view?usp=drive_link"
    },
    {
        "title": "Parent Portal",
        "desc": `Enroll your children, complete and update yearly Emergency Medical and other back-to-school forms.`,
        "url": "https://docs.google.com/document/d/13VLCmUdWegpjmP3mMysm5IbKJoJ10caZR_rc-cZ-yfU/edit?usp=sharing"
    },
    {
        "title": "OneCall Self-Update",
        "desc": `A secure, convenient tool to keep your contact information up-to-date`,
        "url": "https://www.mycallnow.com/"
    },
    {
        "title": "Computer Agreement",
        "desc": `This document explains and defines Liberty Union’s technology use policies for staff, students, and visitors of Liberty Union.`,
        "url": "https://docs.google.com/document/d/1OFBPDqvWuYTWmN7S3NNGng5cpULBRq7tWAdyaXUMBRo/edit?usp=sharing"
    },
    {
        "title": "Progressbook",
        "desc": `A place to find you or your students info.`,
        "url": "https://pa.metasolutions.net/"
    },
    {
        "title": "Harassment Form",
        "desc": `Use this form to report any acts of suspected bullying, harassment and intimidation related to a Liberty Union Schools student.`,
        "url": "https://forms.gle/zW94iGYsDGQAHbFN9"
    },
    {
        "title": "Health & Wellness",
        "desc": `To find info about treating health in school.`,
        "url": "https://drive.google.com/drive/folders/1nWe4yrcJKt21LrKAzMFpfaGBx8rQWa5E"
    },
    {
        "title": "Kroger Rewards",
        "desc": `Giving positive social impact and charitable giving at the national and local levels.`,
        "url": "https://www.libertyunion.org/KrogerRewards.aspx"
    },
    {
        "title": "Vacation Request",
        "desc": `The form for vacations, make sure to contact the office!`,
        "url": "https://drive.google.com/file/d/1qxVfB6lU-akx5NPz0zDBzY1z8XPxbI8l/view?usp=sharingPz0zDBzY1z8XPxbI8l/view"
    },
    {
        "title": "College Visit Verification",
        "desc": ``,
        "url": "https://drive.google.com/file/d/1r1nAQcBPXaEAWK1Y9RSUX7bQjcCFvAx0/view"
    },
    {
        "title": "College Visit Request",
        "desc": ``,
        "url": "https://drive.google.com/file/d/1TcNwKWKDU1E_lTfV1TVp1eodC2c2FPTE/view?usp=sharingCY8o8C_4n5kf4uYRn90eddUiC6ekPNt0/edit"
    },
    {
        "title": "Transcript Request",
        "desc": `Retreve an official document that records all of your grades earned in a course.`,
        "url": "https://forms.gle/ogDN8wGyJq9L1dYc9"
    },
    {
        "title": "Work Permit",
        "desc": ``,
        "url": "https://drive.google.com/file/d/1qwGP0-ob2aEXn1BDl_L2qcC2XVilrbPJ/view"
    },
    {
        "title": "Program of Studies",
        "desc": ``,
        "url": "https://docs.google.com/document/d/1xzv8gQdzVy8CY8o8C_4n5kf4uYRn90eddUiC6ekPNt0/edit"
    },
    {
        "title": "2024/25 Program of Studies",
        "desc": ``,
        "url": "https://drive.google.com/file/d/1hj4TTK669srRrXSMXtV5_ItWAxyMMuez/view?usp=sharing"
    },
]
const allDistrict = [
    {
        "title": "Harassment Form",
        "desc": ``,
        "url": "https://forms.gle/8dnQhdNW8ttdR2Mc9"
    },
    {
        "title": "Safe School Ohio Tip Line",
        "desc": ``,
        "url": "https://www.libertyunion.org/SafeSchoolsOhioTipLine.aspx"
    },
    {
        "title": "Staff Directory",
        "desc": `Search for staff`,
        "url": "https://www.libertyunion.org/StaffDirectory.aspx"
    },
    {
        "title": "Transcript Request",
        "desc": ``,
        "url": "https://forms.gle/ogDN8wGyJq9L1dYc9"
    },
    {
        "title": "ODE Parent Resources",
        "desc": `Info for parents based on grade.`,
        "url": "https://education.ohio.gov/Parents"
    },
    {
        "title": "Bullying Report",
        "desc": `A list of bully reports from each semester.`,
        "url": "https://www.libertyunion.org/BullyingReport.aspx"
    },

]

function loadAllCards() {
    /**
     * Replace NEW_LIST with the list from above
     * Replace NEW_DIV with the new div element id
        for (let i = 0; i < NEW_LIST.length; i++) {
            const elem = NEW_LIST[i];
            const clone = document.getElementById("ex").cloneNode(true);
            clone.id = "";
            clone.href = elem.url;
            const content = clone.children[0];
            content.children[0].innerHTML = elem.title;
            content.children[1].innerHTML = elem.desc;

            document.getElementById("NEW_DIV").append(clone);
        }
     */

    for (let i = 0; i < allElementary.length; i++) {
        const elem = allElementary[i];
        const clone = document.getElementById("ex").cloneNode(true);
        clone.id = "";
        clone.href = elem.url;
        const content = clone.children[0];
        content.children[0].innerHTML = elem.title;
        content.children[1].innerHTML = elem.desc;

        document.getElementById("cardelementry").append(clone);
    }

    for (let i = 0; i < allMiddle.length; i++) {
        const elem = allMiddle[i];
        const clone = document.getElementById("ex").cloneNode(true);
        clone.id = "";
        clone.href = elem.url;
        const content = clone.children[0];
        content.children[0].innerHTML = elem.title;
        content.children[1].innerHTML = elem.desc;

        document.getElementById("cardmiddle").append(clone);
    }

    for (let i = 0; i < allHigh.length; i++) {
        const elem = allHigh[i];
        const clone = document.getElementById("ex").cloneNode(true);
        clone.id = "";
        clone.href = elem.url;
        const content = clone.children[0];
        content.children[0].innerHTML = elem.title;
        content.children[1].innerHTML = elem.desc;

        document.getElementById("cardhigh").append(clone);
    }
    for (let i = 0; i < allDistrict.length; i++) {
        const elem = allDistrict[i];
        const clone = document.getElementById("ex").cloneNode(true);
        clone.id = "";
        clone.href = elem.url;
        const content = clone.children[0];
        content.children[0].innerHTML = elem.title;
        content.children[1].innerHTML = elem.desc;

        document.getElementById("cardall").append(clone);
    }
}

document.body.onload = () => {
    loadAllCards()
};
