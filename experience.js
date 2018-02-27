const DomParser = require('dom-parser')
const parser = new DomParser()
const fs = require('fs')
const readline = require('readline')
const stream = require('stream')
var words=require("./words.js")
module.exports.experience = Experience
// var f = ['</p>',
//   '<p>',
//   '   <strong>Kaiser Permanente – Corona, CA</strong>',
//   '</p>',
//   '<p>',
//   '   Lead reporting and data analysis project plans for call centers serving California, Colorado, mid-Atlantic, and Northwest states; internal departments (regulatory, sales, marketing); and employer groups.',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Function as a technical and data analysis SME for Pega CRM and Genesys telephony systems, provide data integration for <strong>end-to-end view of customer </strong>contacts and develop custom reports using Alteryx.',
//   '   </li>',
//   '   <li>',
//   '      Wrote specs for an ETL project aggregation layer using Alteryx that enabled rapid data analysis on customer service workflow data, <strong>reducing turn-around time</strong> from hours to minutes.',
//   '   </li>',
//   '   <li>',
//   '      Design an early warning ICD/10 <strong>Tableau dashboard with an Alteryx backend</strong> to monitor up stream provider claims activity and customer contact volume.',
//   '   </li>',
//   '   <li>',
//   '      Develop a line of business cost allocation model, for a nine figure budget, in Excel using pivot tables, VLOOKUP’s and graphs with an Alteryx back end for multi-platform data wrangling and consolidation. ',
//   '   </li>',
//   '   <li>',
//   '      Wrote a data map between telephony and contact documentation SQL database systems. Output from data mapping process is used through the Measure and Analyze Six Sigma project phases to <strong>increase customer satisfaction and reduce call handle time.</strong>',
//   '   </li>',
//   '   <li>',
//   '      Wrote business requirements for forecasting models to<strong> predict impact</strong> of Health Care Reform initiatives to contact center call volume, including cross collaboration with PMO and other matrixed departments.',
//   '   </li>',
//   '   <li>',
//   '      Wrote a data analysis model to justify inter-departmental budget transfers. The model combines tracking data from three disparate database systems: CRM, telephony, and workforce forecasting.',
//   '   </li>',
//   '   <li>',
//   '      Collaborated with a department that frequently had urgent requests, resulting in a <strong>better working relationship</strong> between the department and the analytics team, and less escalated requests.',
//   '   </li>',
//   '   <li>',
//   '      Recommended improvements for a service center that enabled its staff to achieve several <strong>year-over-year improvements </strong>from March 2010 to March 2011—including a double-digit increase in the percentage of calls answered within the target time.',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>New York Life, Mass Mutual, Southern California Jan. 2009 to Present </strong>',
//   '</p>',
//   '<h4>',
//   '   <a href="https://www.linkedin.com/title/financial-services-professional?trk=pprofile_title">Financial Services Professional</a>  (Jan. 2006 to Oct. 2008)',
//   '</h4>',
//   '<p>',
//   '   Served in three commission-only sales positions with insurance and financial companies. Earned distinction of "Executive Council" at New York Life, a rare accomplishment for a new agent, and increased internal referrals at AAA, contributing to the team meeting the cross-selling goal. ',
//   '</p>',
//   '<p>',
//   '   <em>(Exact dates and job titles associated with each position available upon request for employment verification.)</em>',
//   '</p>',
//   '<p>',
//   '   <strong>Corona-Norco Unified School District – Corona, CA</strong>',
//   '</p>',
//   '<p>',
//   '   <strong>Supervisor-Technology and Assessment (Jan. 2002 to Jan. 2006)</strong>',
//   '</p>',
//   '<p>',
//   '   Analyzed existing data models and improved existing data processes and conducted internal consulting to assess business practices and recommend improvements.',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Design and implementation of project plan for a high-profile strategic initiative to migrate data from a variety of complex database (db) sources into a single database, <strong>ensuring regulatory compliance</strong> with both state and national agencies.',
//   '   </li>',
//   '   <li>',
//   '      Implemented a COTS database (db) program to scan 350,000 documents yearly and produce reports, <strong>reducing turnaround time from several weeks to less than 24 hours</strong>.',
//   '   </li>',
//   '   <li>',
//   '      Developed MS Access dashboard single-screen views drawing from 5 different complex database (db) modules.',
//   '   </li>',
//   '   <li>',
//   '      Developed multi-dimensional data models using <strong>SPSS statistical analysis</strong> software to analyze data contained in five database modules and wrote reports for end-users.',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>Corona-Norco Unified School District – Corona, CA</strong>',
//   '</p>',
//   '<p>',
//   '   <strong>Data Analyst (Computer Operator) (Aug. 1999 to Dec. 2002)</strong>',
//   '</p>',
//   '<p>',
//   '   Spearheaded new processes that enabled district to track data for the first time.',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Created a project plan for a centralized reporting methodology that delivered confidential student information; reduced research time for 2,500 personnel from weeks to one day. ',
//   '   </li>',
//   '   <li>',
//   '      Developed new methods to disaggregate student achievement and demographic data using SPSS statistical analysis software.',
//   '   </li>',
//   '</ul>',
//   '<p>']

//   let b = [
//   '</p>',
//   '<p>',
//   '   Worked for 6 months as HR Executive with Alliance Employment Solution Pvt. Ltd. ',
//   '</p>',
//   '<p>',
//   '   <strong>Roles &amp; Responsibilities </strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Handling end-to-end recruitment cycles.',
//   '   </li>',
//   '   <li>',
//   '      Sourcing and screening of candidates through job portals (Naukari, Monster and Shine).',
//   '   </li>',
//   '   <li>',
//   '      Coordinated and conducted personal/Telephonic interviews at various levels.',
//   '   </li>',
//   '   <li>',
//   '      Handling other HR operations activity.',
//   '   </li>',
//   '</ul>',
//   '<p>']


//   let c = [
//   '         </p>',
//   '</td>',
//   '</tr>',
//   '   <tr>',
//   '      <td>',
//   '         <p>',
//   '            <em></em><strong>Working in Venturepact LLC </strong>Jan 2018',
//   '         </p>',
//   '</td>',
//   '</tr>',
//   '   <tr>',
//   '      <td>',
//   '         <ul>',
//   '            <li>',
//   '               Have basic knowledge in Node js and javascript',
//   '            </li>',
//   '</ul>',
//   '</td>',
//   '</tr>']

//   let q = [ '<strong>EXPERIENCE</strong>',
//   '</p>',
//   '<p>',
//   '   <em>I have one year experiance as </em><strong><em>HRRecruiter </em></strong><em>in placement cell ( </em><strong><em>CAREER HIKE POINT). (</em></strong><em>May2016- April 2017)</em><strong><em>. </em></strong>',
//   '</p>',
//   '<p>',
//   '   <strong>Responsibilities</strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Present the employees performance report in front of HR manager Assist the HR manager                                     planning of Organizational recruitment<strong>.</strong>',
//   '   </li>',
//   '   <li>',
//   '      Get Requirement from company and fulfill their requirement.',
//   '   </li>',
//   '   <li>',
//   '      Generate leads from job portals (Indeed and shine)',
//   '   </li>',
//   '   <li>',
//   '      Profile Handling',
//   '   </li>',
//   '   <li>',
//   '      Handling End to End Recruitment Process',
//   '   </li>',
//   '   <li>',
//   '      Screening and Sorting.',
//   '   </li>',
//   '   <li>',
//   '      Grievance Handling',
//   '   </li>',
//   '   <li>',
//   '      Handling cash for official purposes',
//   '   </li>',
//   '   <li>',
//   '      Maintain all records of Engaged candidates',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>ADI GROUP</strong>',
//   '</p>',
//   '<p>',
//   '   I have six month experience in ADI Group as HR Recruiter (July2017- Present)',
//   '</p>',
//   '<p>',
//   '   <strong>Key Responsibilities Handling  </strong>',
//   '</p>',
//   '<ol>',
//   '   <li>',
//   '      Reporting to the HR Director for Recruitment status on Daily basis.<br />2. Maintain the work structure by updating job requirements &amp; job descriptions for all positions.<br />3. Responsible for end to end recruitment.<br />4. Sourcing, Short listing &amp; scheduling candidates for interview through Portals, Job Postings, Headhunting, References, Placement Social –Media etc. <br />5. Preparing Offer/Appointment Letters <br />6. Responsible for joining formalities &amp; induction of new hires.<br />7. Responsible for coordinating with all departments regarding internal resources requirements.<br />9. Maintain the internal HR process like skills assessments, performance reviews leave management, &amp; communicating other HR policies. <br />10. Handling employee leave records .<br />11. Handling Issues related to people such as compensation, hiring, performance management, Organization development, safety, wellness, benefits, employee motivation, communication, administration &amp; training. <br />12. Support the administration with facility management activities when required.<br />13. Managing Employees HR Norms – Attendance ',
//   '   </li>',
//   '</ol>',
//   '<p>',
//   '   14. Replying to the inquiries / complaints / requests of Client via. E-mail <br />       Correspondence.<br />   15. Execute other assigned duties as per business requirement.<br />   16.Handling all Employee Engagement Activities and Induction/Orientation of           employees',
//   '</p>',
//   '<p>',
//   '   <strong>Portals</strong> – Linked in , Naukri, Shine , Times Job and Indeed.',
//   '</p>',
//   '<p>',
//   '   <strong>STRENGTH</strong>' ]

//   f = [ 
//   '</p>',
//   '<p>',
//   '   <strong>National Production Planner</strong>',
//   '</p>',
//   '<p>',
//   '   <em>Kraft Foods- Northfield HQ        </em><strong></strong>August 2014 - October 2014',
//   '</p>',
//   '<p>',
//   '   Successfully managed Customer Fill Rate, Waste, and Days Forward Coverage for $300MM On-Demand Coffee category that included Tassimo and Kraft K-Cups. Managed finished goods production on over 140 skus, 8 internal production lines, 5 external manufacturing locations, and 12 distribution locations',
//   '</p>',
//   '<p>',
//   '   <strong>Key Accomplishments:</strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Created the supply plan and execution of $200MM Kraft K-cups transition to Keurig Green Mountain production plant within 3 months,  surpassing standard 6-month lead-time timeline',
//   '   </li>',
//   '   <li>',
//   '      Reduced Days Forward Coverage of finished goods inventory by ~$3MM (42 Days) ',
//   '   </li>',
//   '   <li>',
//   '      Decreased finished goods waste by $5.2MM in 2013 vs. 2012 on US Tassimo',
//   '   </li>',
//   '   <li>',
//   '      Accomplished Lean Six Sigma Green Belt Certification by implementing a Kanban at third party warehouses which  reduced inventory by $1.5MM below monthly target  of $6.3MM target for US Tassimo ',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>Project Commercialization Manager</strong>',
//   '</p>',
//   '<p>',
//   '   <em>Kraft Foods- Glenview HQ </em>                   \t\t\t\t         April 2010 - August 2012',
//   '</p>',
//   '<p>',
//   '   Directed commercialization process for the Philadelphia Cream Cheese category generating over $1B dollars in gross revenue. Led cross-functional team in the development and implementation of revenue growth projects, productivity goal projects, and priorities of the category',
//   '</p>',
//   '<p>',
//   '   <strong>Key Accomplishments:</strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Implemented process to prioritize R&amp;D resources for the Philadelphia Cream Cheese Category',
//   '   </li>',
//   '   <li>',
//   '      Developed  framework for Portfolio Management Review process within IBP  for  the cheese business unit',
//   '   </li>',
//   '   <li>',
//   '      Successfully commercialized $30MM Philadelphia Cooking Crème Platform in 2011',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>Network Fulfillment Planner\t\t\t\t</strong>',
//   '</p>',
//   '<p>',
//   '   <em>Kraft Foods - Aurora Mixing Center / Glenview HQ</em>\t\t\t     October 2006-March 2010',
//   '</p>',
//   '<p>',
//   '   Responsible for Customer Fill Rate, Waste, and Deployment of  $500MM Kraft Sandwich Cheese category from 2 Kraft manufacturing plants and 3 External Manufacturing locations to 7 Mixing Centers',
//   '</p>',
//   '<p>',
//   '   <strong>Key Accomplishments:</strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Increased Sandwich Cheese Customer Fill Rate 0.7% to 98.4%  in 2009 vs. 2008 ',
//   '   </li>',
//   '   <li>',
//   '      Narrowed liquidation/food bank dollars on Sandwich Cheese by 42% resulting $204M savings in 2009 vs. 2008',
//   '   </li>',
//   '   <li>',
//   '      Reduced liquidation/food bank on Retail Sandwich Cheese by 16% or $383M in 2008 vs. 2007',
//   '   </li>',
//   '</ul>',
//   '<p>',
//   '   <strong>Operations Supervisor</strong>',
//   '</p>',
//   '<p>',
//   '   <em>Kraft Foods - Post Division, Battle Creek, MI</em>\t\t\t       \t       May 2004- October 2006',
//   '</p>',
//   '<p>',
//   '   Responsible for safety and supervision of up to 41 hourly employees and 9 production lines within the largest Post Cereal union facility. Maintained working relationship with the union by following the terms of the collective bargaining agreement',
//   '</p>',
//   '<p>',
//   '   <strong>Key Accomplishments:</strong>',
//   '</p>',
//   '<ul>',
//   '   <li>',
//   '      Developed start up plan for Fruity Pebbles and Raisin Bran processes to attain 64% of scheduled cases within the first 24 hours',
//   '   </li>',
//   '   <li>',
//   '      Implemented Honey Bunches of Oats process start-up creating $8.4M in annual savings',
//   '   </li>',
//   '   <li>',
//   '      Conceptualized Bran Cooker sequencing project resulting in $5.4M in annual saving',
//   '   </li>',
//   '   <li>',
//   '      Led Battle Creek Chapter of African Americans in Operations',
//   '   </li>',
//   '</ul>' ]

//   var data=fs.readFileSync('exp.json');
// //   let d = fs.readFile('exp.json', 'json')

// let d = JSON.parse(data).data

// l = f.join()
// //   console.log(" 👎", d)
  function Dommer( data, tag){
      let dom = parser.parseFromString(data);
      let ul = dom.getElementsByTagName(tag);
      let al =  Array.prototype.slice.call(ul);
      return al
  }

  function Experience(a){
    let list = []
    let alpha = Dommer( a, 'p' );
    alpha = alpha.map( el => el.innerHTML)
    let ar = []
    let lastAr = []
    console.log(" 👩‍✈",alpha.length)
    alpha = alpha.map( el => {
        if( /(Responsibilitie(|s)| key accomplishment(|s))/gmi.test(el) ||  el.includes('Key Accomplishments') ){
            return ''
        }
        return el
    } )
    // last array preparation
    if ( parser.parseFromString(alpha[0]).getElementsByTagName('strong').length > 0 ){
        
        alpha.forEach( el => {
            dom = parser.parseFromString(el).getElementsByTagName('strong').map(el => el.innerHTML)
            
            if( /((([A-Za-z]+\s*\d{4}\s*[\-|\s*|]\s*)+\s*)|(\d{2}\s*[\/]\s*\d{4}\s*[\-]?[a-z]*\s*)+)(\(.*\))?/gmi.test(el) ){
                ar.push(el)
            }else{
                ar.push(dom.join())
            }
            // lastAr.push(str)
        })
        let str = ''
        for (let i = 0; i < ar.length; i++) {
            str = ''
            if( ar.length === 1 ){
                str += ar[i]
            }else if( ar[i] === undefined || ar[i+1] === undefined) {
            }else if( ar[i].length > 0 && ar[i+1].length > 0){
                console.log(true)
                str += ar[i] + '\n' + ar[i+1]
                i++;
            }else if( ar[i].length > 0 && ar[i+1].length == 0 ){
                str += ar[i]
                i++;
            }
            lastAr.push(str)
        }
        // console.log(" 👩‍✈",lastAr)
        // console.log( " 👚", ar)
        // console.log(lastAr)
        lastAr = lastAr.filter( el => el.length > 0 )
    }else if ( parser.parseFromString(alpha[0]).getElementsByTagName('h2').length > 0 ){
        console.log( " 💯", alpha.forEach( el => {
            dom = parser.parseFromString(el).getElementsByTagName('h2').map(el => el.innerHTML)
            // console.log(dom)
        }))
    }else{
        alpha.forEach( el => {
            if(/<\w+>|<\/\w+>/gm.test(el)){
            }else{
                lastAr.push(el.replace(/^,|,$/gm, ''))
            }
        })
        lastAr = lastAr.filter( el => el.length > 0 )
        // console.log("  🍷", lastAr)
    }
    let obj = {

    }
    lastAr = lastAr.map( el => el.replace(/^,|,$/gm, '').trim() ).filter(el => !/(portals)/gmi.test(el))
    lastAr.forEach( (el, i) => {
        obj[el] = ''
    })
    // console.log(" 👩‍🏫",obj)
    readNow( a, Object.keys(obj), obj )
    // console.log( " 👳‍♀" ,f[2], " 🤹‍♀", 0, " 🤷‍♀", f )

  }


  function readNow(baseText, lastArray, lastObj){
    const buf = new Buffer(baseText);
    // console.log(lastArray)
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buf);
    
    const rl = readline.createInterface({
        input: bufferStream,
    });
    
    let count = 0;
    let base = null
    rl.on('line', function (line) {
        if(lastArray[count] === undefined){
        }else if(line.includes(lastArray[count].split('\n')[0])){
            base = lastArray[count++]
        }
        // console.log( " ❌",base)
        if( base == null ){
        }else{
            lastObj[base] += line + "\n"
        }
    });
    rl.on('close', (data) => {
        // console.log(lastObj)
        main( lastObj, Object.keys(lastObj) )
    })

  }

  function main(pop, pip){ 

    
       var final_experience=[]
      var objExp={
          title:"",
          startDate:"",
          endDate:"",
          description:"",
          role:""
        }
        let i = 0
        for( x of Object.values(pop) ){
            objExp.title = pip[i++].replace(/\n|<\w+>|<\/\w+>|<\w+\s*\/>|\t*/gm,'').trim()
            let pc = Dommer(x, 'p')
            objExp.description = showEach(pc).map( el => el.replace( new RegExp(`\\n|<\\w+>|</\\w+>|<\\w+\\s*/>|\\t*|${ objExp.title.split(/\s\s+/gm).join('|') } `,'gm'),'').trim() ).join()
            
            // console.log( b(pc) )
            if( x.includes('<li>','</li>') ){
                let pc = Dommer(x, 'li')
                objExp.role = showEach(pc).map( el => el.replace(/\n|<\w+>|<\/\w+>|<\w+\s*\/>/gm,'').trim() )
            }else{
                objExp.role = ''
            }
            dater = dateR(objExp.title)
            if( dater === undefined){
                objExp.startDate = null
                objExp.endDate = null
            }else{
                objExp.startDate = dater[0]
                objExp.endDate = dater[1]
            }
            // objExp.startDate = dater[0];
            // objExp.endDate = dater[1];
            // let cObj = Object.assign( {} , objExp )

            // console.log(" ⚡️ ", cObj )
            final_experience.push(Object.assign( {} , objExp ))
        }

    function showEach( p ){
        let array = []
        p.forEach( value => {
            return array.push(value.innerHTML)
        } )
        return array
    }

    function dateR( title ){
        let duration = title.toString().match(/(([A-Za-z]+(\.|)\s*\d{4}\s*(\-|\s*|\b.*\b)\s*([A-Za-z]+(\.|)\s*\d{4}|present))|(\d{2}\s*[\/]\s*\d{4}\s*[\-]?[a-z]*\s*)+)(\(.*\)|)/gmi)
        let startDate, endDate
        let c;
        if(duration != null && duration != undefined){
        if((/.*(\-|\–|\b(to)\b)/img).test(duration.toString())){
        regexDuStart=duration.toString().match(/.*(\-|\–|\b(to)\b)/img)

        regexDuend=duration.toString().match(/(\-|\–|\b(to)\b).*/img)

        startDate=regexDuStart.toString().replace(/(\-|\–|\b(to)\b)/gmi,'');
        endDate=regexDuend.toString().replace(/(\-|\–|\b(to)\b)/gmi,'');
         c =  [startDate, endDate]
         return c
        }else{
            endDate=duration;
         c = [ undefined, endDate]
         return c
        }
    }
    }

    
    words.obj.professionalExperience=final_experience
        console.log(" 👩dvfdsdv‍💼",final_experience)
        return   final_experience
// var final_experience=[];

  }


  