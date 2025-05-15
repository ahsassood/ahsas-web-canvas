
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  categories: string[];
  content: string;
}

// Sample blog post data
const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'Public Health Facilities in Udaipur, Rajasthan',
    date: 'November, 2020',
    categories: ['Public Health'],
    content: `


<h2>1	Public Health Facilities Survey 2022</h2>
<p>In July 22's monsoon, a team of 12 volunteers arrived at the Udaipur Railway Station to conduct a survey of public health facilities in 9 blocks of Udaipur district. Over the following fortnight, the volunteers visited 100 centers across villages to evaluate these facilities on health care provision to the community. They were assessed on various parameters like accessibility, number of people being served, physical infrastructure, services administered, staff appointed and the proportion present, to name a few.</p>

<p>This was the third survey in a series of decadal surveys of Udaipur district directed at gauging health care provision. The first one was led in 2002-03 by Abhijit Banerjee, Angus Deaton, Esther Duflo while the second that followed in 2012-13 was conducted by Reetika Khera and Kritika Goel, and many volunteers.</p>
<h2>2	Healthcare in India</h2>
<p>According to the National Health Profile 2021, one of the quantitative goals is to “increase health expenditure by the government as a percentage of GDP to 2.5 % by 2025.” We are well aware that the goal from NHP 2002 was 2% and then in 2015 was 2.5%. Hence, the goal in 2021 is the same as that set in 2015 which is distressing given that we are still far from the goal set 20 years ago. On 13th September 2022, Times of India reported that the government expenditure as a percentage of health fell for the first time in 15 years to just under 1.3% in 2018-19 as per National health Accounts Estimates for India, 2022. This illustrates the attention or rather its dearth given to health in the current political system.</p>
<h2>3	Background: UHS 2002-03, HFS 2012-13, PHFS 2022</h2>
<p>Udaipur Health Study (UHS) 2002-03: The findings from the 2002-03 health study revealed that most people were not dependent on public health facilities and instead relied on private facilities and bhopas for health care. Accessibility by road and presence of living quarters were major factors in deciding the presence of medical personnel in the facilities. Also there were alarming patterns of absenteeism observed in facilities at all levels. This caused the facilities to remain closed which left the community debating whether it was worth their while to walk 2kms to the facility only to find it closed. Hence, the dwindling trust in public health facilities at the time didn’t come as a surprise.</p>

<p>Health Facilities Survey (HFS) 2012-13: In 2011 and 2013, the Government of Rajasthan introduced crucial schemes which greatly affected the medical landscape of health accessibility in the blocks surveyed. Medicines and essential tests were made free and this probably translated into an 80% increase in the Patient Utilization Rate (PUR) from 2002-03. Absenteeism, however, managed to prevail these 10 years causing the PUR to hang low both objectively (at 5.4) and relative to states pioneering in health care delivery (Himachal Pradesh, Tamil Nadu, etc.).</p>
<p>Public Health Facilities Survey 2022: The sample (carried over from HFS 2012-13), methodology and findings from the Public Health Facilities Survey 2022 are presented as follows.</p>
<h2>4	Introduction</h2>
<p>The National Multidimensional Poverty Index Report by Niti Aayog in 2021 presents Udaipur as one of the poorest districts in India. An exorbitant 48% of Udaipur’s population is multidimensionally poor, i.e., deprived of health, education and living standards.</p>
<p>As per Population Census 2011, “Schedule Caste (SC) constitute 6.1% while Schedule Tribe (ST) are 49.7% of total population in Udaipur district.” Udaipur lies among the districts with the highest population of Scheduled Tribes in Rajasthan. It has been declared as a Fifth Schedule area as per the Article 244 of the Indian Constitution to ensure the protection of aboriginal customs and prevent the alienation of their lands and natural resources to non-tribals.</p>
<h2>5	Sample and Methodology</h2>
<p>The team visited a total of 100 public health facilities in July ‘22 in 9 blocks of Udaipur, Rajasthan. These health centers fell in blocks located to the north-west, west and south of Udaipur City, with some brushing the Rajasthan-Gujarat border. Most crucially, these were the same centers visited 10 and 20 years ago, allowing us to draw a comparative analysis in health care delivery over all these years.</p>

<p>The healthcare system in most states in India is a three tiered one with sub-centres (SCs) at the lowest level, primary health centers (PHCs) at the intermediate level and community health centers (CHCs) at the block level. The team this July visited 13 CHCs, 22 PHCs and 65 SCs. These visits came as a surprise to almost all facilities and the team spoke to doctors, lab technicians, Auxiliary Nurse Midwives (ANMs), nurses and people visiting the facilities at the time of the team’s arrival. The section below sheds light on the eye-witnessed account of the volunteers and attempts to provide a comparative analysis against the previous studies.</p>
<h2>6	Findings and Comparative Analysis</h2>
<h3>6.1	Access to Health Centers</h3>
<p>6.1.1	Coverage per facility: Sub-centers were often 1-3 room buildings - newly painted in a striking yellow in case of Health and Wellness Centers (more context will follow) - run by ANMs. Hence, sub-centers were hard to miss and were generally located near the village’s anganwadi and school.</p>
<p>In the UHS 2002-03, each SC served 3,600 individuals which rose to 4,836 by 2013-14 and currently rests at 4,956. An SC is supposed to serve about 3000 in plain areas and 5000 in hilly areas. With only a couple of SCs being in hilly areas, the number for 2022 is rather high and often left 1 ANM looking after an unreasonable number of people, and often populations under multiple sub centers. This calls for appointment of more ANMs per sub centers or quicker conversion into fully functioning HWCs so that a CHO can be appointed.</p>
<p>As for PHCs, they were larger buildings with dedicated rooms for inpatient stay, operation theaters, storage, the pharmacy and testing. Each served 48,000 in the UHS 2002-03, but only 31,315 by 2013-14 and a gratifying 20,145 this year. This reflects an increase in the number of PHCs available per a given number of people and hence increases their accessibility.</p>
<p>Subsequently, CHCs were even bigger buildings that were always crowded and doctors, nurses and patients bustled about as usual. While CHCs are supposed to cater to 80,000-1,20,000 people, the CHCs in the areas surveyed supported 56,319 people each which is an indicator of dedicated attention given to the villages served.</p>
<p>6.1.2	Transport: Every SC, PHC and CHC among the 100 centers visited with the exception of one SC were accessible either by shared tempo/jeep/private or public bus. This is an increase from the previous 96% of accessible PHCs. The average distance of the village furthest from an SC that served it was only 5.4kms.</p>
<p>6.1.3	Facility Opening Hours: Only 60% of the facilities were open at the time of arrival. 35 out of the 40 facilities that were closed were SCs. This number can be attributed to the unavailability of ANMs - that primarily run an SC - due to field and immunization work/other outreach activities in nearby Anganwadis. ANMs were overburdened and overworked, what with having to travel long distances frequently in public vehicles, on foot, often crossing stretches of river beds. The lack of government provided transport facility was often pointed out as an issue preventing the smooth functioning of a facility.</p>
<p>After about 3-4 visits to SCs the team learned what being an HWC or Health and Wellness Center meant. Ayushman Bharat was launched in 2018 as recommended by NHP 2017 “to achieve the vision of Universal Health Coverage (UHC)”, as a part of which, centers were converted to HWCs. One of the implications was that a Community Health Officer (CHO) had now been appointed at the facility. The presence of the CHO was mostly well appreciated as the workload was now divided, the centers could remain open for longer hours, and paperwork per person had reduced.</p>
<p>All CHCs and 17 out 22 PHCs were open at the time of arrival where doctors/nurses/staff tried to manage the day’s footfall.</p>
<h3>6.2	Physical Infrastructure</h3>
<p>6.2.1	Health and Wellness Centers: Another facet that came along with a sub-center having been converted to a Health and Wellness Center was that they had been newly painted, making the sub-centers very eye-catching. Also, in many SCs and PHCs visited, a new room had been built which was used by some as a labor room and by others as the CHO’s office.</p>
<p>6.2.2	Water, Electricity Supply and Toilets: While only 30% of PHCs were noted to have all three in 2002-03, the number rose to 71% 10 years later. In a shocking discovery only 40% of PHCs claimed to have running water supply, regular electricity and toilets. The lack of electricity can be attributed to the rainy season that the survey had been conducted in, which the team felt that these health facilities were grossly under prepared for.</p>
<p>For SCs, the number dips even further to 14% where all three facilities were available. Facilities in Jhadol and Kotra were clearly not prepared for rains as almost every center had leaky ceilings which often ruined all infrastructure including beds, medicines, handwritten records. The ceiling threatened to collapse if the door was thrust open.</p>
<p>Only 28 percent of SCs had a running water supply, often becoming the reason for lack of deliveries in SCs even with dedicated labor rooms. In the words of ANMs and CHOs, “Paani ke bina hospital kaise chalega, delivery kaise hogi.” In a positive learning though, 77% of the CHCs visited had regular water and electricity supply and functioning toilets.</p>
<p>6.2.3	Closed/Unusable facilities: Some sub-centers visited had either been closed for a while or entirely dilapidated and unusable. The team encountered statements like, “Sab khandar ho chuka hai” (“Everything has been wrecked”), “Baarish ki wajah se asth vyasth ho gaya hai udhar toh” (“The facility has gone helter-skelter because of the rains”). But even in these cases, an ANM from another facility diligently came to the nearby anganwadi to vaccinate children and pregnant women after getting supplies from the nearby PHC/CHC.</p>
<p>In some unexpected accounts, Kunthariyas sub-center was running out of another private space because the official building was used by drunkards to crash at night while Thep’s SC had goats tied to the entrance.</p>
<h3>6.3	Availability of Services</h3>
<p>6.3.1	General Overview: The basic expectation from sub-centers, it seemed, was child immunization, ante and postnatal care, first aid, wound dressing, basic lab tests (Haemoglobin, Urine/Pregnancy tests), basic but essential drugs (antibiotics, fever medication, analgesics).</p>
<p>Interestingly, almost all SCs in Kotra, which is infamous for unsafe roads after 5PM, were doing deliveries while that was not the case for SCs located in more urban areas. The team noticed that in blocks where PHCs/CHCs were very accessible (either based on distance or conveyance) people did not depend on SCs for treatment. This crowded the bigger centers increasing the wait time and left the smaller ones vacant and decaying. Hence, the location of all centers with respect to each other and residential areas must be well thought out.</p>

<p>As for PHCs, almost all of them had a cold storage facility and all vaccines in stock as well. Hepatitis B, blood group test, sputum test which often SCs failed to provide (even if they performed deliveries) were always available here.</p>
<p>6.3.2	Haemoglobin and Pregnancy Tests: Every single PHC and CHC visited had the availability of haemoglobin and a pregnancy test. This number seems to have shot up from “about half” in UHS 2002-03, and then “almost all” in PHS 2013-14 to “every single PHC” this year. The number for SCs was a whopping 92% which is very encouraging given the infamous attributes associated with almost half of the SCs visited. In the words of a CHO assigned to the Kagwas sub center in Kotra district, “Yahan rehna toh kala pani ki saza hai” (“Living here is like the cellular jail imprisonment during British raj”).</p>
<p>6.3.3	Urinalysis and Blood Group Test: With regards to urine and blood group tests, 90%-100% PHCs and CHCs were equipped to conduct them compared against a 30%-40% in 2003-03 and an 80% in 2013-14. Things are looking up and the number of areas lacking behind are dwindling in the decadal checks.</p>
<p>6.3.4	Essential Medicines: About 80% of the CHCs visited had every single essential medicine that the team had asked for. 95% PHCs had medication even for asthma and diabetes which weren’t considered too essential in 2002 but had started to be stored by PHCs around 2013.</p>
<h3>6.4	Patient Utilization Rate</h3>
<p>The PUR saw an extraordinary increase in PHCs (228% from 2013) as it went from 3.0 to 5.4 to 12.3 this particular year. This can be attributed to the trust that these facilities have established among the community. The free medicines and tests have definitely helped their case. A factor that remains to be mentioned is the tireless efforts of ANMs from sub centers who spend a major part of their time in vaccinations, awareness drives and outreach activities. They recommend people to PHCs and CHCs for tests that cannot be conducted at anganwadis or sub centers. ANMs have monthly targets to fulfill and are rewarded in cash for some if they recommend enough people to a PHC/CHC.</p>
<p>The PUR was 7.6 for SCs which is higher than that for PHCs even in the previous years and it was an exceptional 18.3 for CHCs.</p>
<h3>6.5	Staff Appointment</h3>
<p>ANMs had often been working at the facility for a long time (up to 30 years in one case) and were familiar with the people of the village. They had gained the trust of the community and people were willing to listen to them. CHOs on the other hand were newly appointed and often came from further away. They faced language issues, alienation and lack of trust from the community.</p>
<p>Many ANMs that the volunteers spoke to at their SCs claimed that their burden had been greatly reduced because of the appointment of the CHO ever since the facility got converted to a Health and Wellness Center. The SC could remain open for the official opening hours and people could be attended to even when the ANM was away at field visits. Appointing more staff at the centers, then, becomes a major takeaway from the survey that will help improve the functioning of these public health facilities.</p>
<p>On the other hand, the number of doctors appointed at PHCs actually went down to its 2002-03 counterpart that rested at 1.5, which is a decline from the 1.8 recorded in 2013-14. The appointment of other health staff also reduced to 7.4 resting somewhere between the value for 2002-03 (5.8) and that for 2013-14 (10.5). 7.4 is close to half the norm prescribed by the IPHS (15 per PHC).</p>
<p>CHCs mostly had all general facilities that were expected of them, but hardly any specialized personnel - surgeons, gynecologists, orthodontists. More often than not they were crowded with waiting lines outside the doctor’s room indicating a lack of present/appointed staff.</p>
<h3>6.6	Staff Attendance</h3>
<p>Attendance in PHCs can be said to have improved from the previous 3.6 present out of 10.5 appointed (34%) in 2012-14. For SCs and PHCs, this number is now at around 48% while that for CHCs is close to 70%.</p>
<p>A major responsibility of ANMs was field work, vaccinations. Hence, for SCs the absence of health workers can be attributed majorly to field activities of ANMs while the staff present elsewhere mentioned that the rains had often reduced the attendance since people came from villages upto 25kms away. This was often because the staff quarters could not accommodate the appointed staff or had leaky ceilings which made them unusable in the season or had not been built altogether.</p>
<p>Nevertheless, absenteeism cannot be attributed as the main reason preventing the smooth functioning of a health facility. The CHC as mentioned above reflected high rates of attendance and the PHCs and SCs felt short staffed due lack of appointment of doctors and lab technicians. Hence, instead of absenteeism being the area of major focus as in the last two decades, this time preparedness for the rains and higher appointment rates can be declared bottlenecks for efficiency.</p>
<h3>6.7	Fees Charged</h3>
<p>99 out of the 100 facilities visited charged no money for registration, consultation, medicines or even operations. This is an improvement from the 67% facilities which charged for one service or the other in 2013-14.</p>
<h3>6.8	Problems</h3>
<p>When asked about which factors affected the smooth functioning of the facility the highest number of votes (75 out of 100 facilities) went to ‘Inadequate building maintenance’, while pain points such as ‘Lack of staff accommodation’, ‘Lack of staff’ and ‘Inadequate transport facility for staff’ followed closely. This provides definite actionables necessary for improving public health care provision in Udaipur.</p>
<p>Some CHCs had been recently converted from PHCs. Here, the number of patients had increased and so had the expected services but there had been no change in the building to accommodate for all the extra services/supplies. Some respondents complained about the lack of funds. In the words of Jhadol’s Medical Officer in charge, “Agar government ko private ki tarah chalana hai toh paisa toh chahiye hoga na?” (“If they want to run a government facility as though it were private, then adequate funds should be allocated right?”).</p>
<h3>6.9	HWCs</h3>
<p>Of the 51 facilities that had become HWCs, staff at only 26 of them felt that there had been major improvements since the conversion. This was often because the facility had no use of a new labor room if there was irregular electricity/absence of running water supply needed for deliveries or that the facility had no use of a CHO if the building itself was completely dilapidated or unsafe to live in.</p>
<h3>6.10	Five year difference</h3>
We also enquired about the perception of change as per experienced staff.</p>
<p>Out of the 69 facilities where the team was able to find respondents who had served at the health center for 5 years or more, 49 said that the facility had improved in the last 5 years. This is a great number to start with and gives hope to the state and central government and all health care workers that helped bring about this change.</p>
<p>Some PHCs had previously been operating in PPP (Public Private Partnership) mode. These facilities were way better staffed before and an indubitable deterioration was reported in the services provided and medicine supply after they switched from PPP to government facilities.</p>
<h2>7	Conclusion</h2>
<h3>7.1	What is working well?</h3>
<p>There are enough PHCs/CHCs per person in the blocks surveyed.</p>
<p>Appointment of CHOs at HWCs has greatly helped SCs and PHCs allowing them to remain open for official opening hours.</p>
<p>The number of services provided at centers including tests and medicines have increased.</p>
<p>There has been a major boost in the PUR signifying more trust in the centers among the community.</p>
<p>Absenteeism seems to have reduced which is reflected in improved staff attendance.</p>
<p>All services are provided free of cost and the average resident is more willing to seek consultation.</p>
<h3>7.2	What needs to change?</h3>

<p>There are not enough SCs per person and hence, there is a visible need for well located and accessible SCs so that the load per SC is reduced.</p>
<p>A lot more staff is needed at these centers than is currently appointed.</p>
<p>Making water and electricity supply available and then regular must be a major focus.</p>
<p>Lastly, the centers must be better prepared for rains by building structures that can bear the brunt of the unsympathetic weather conditions.</p>





    `
  },
  {
    id: '2',
    title: 'Raising Engineers and Housewives',
    date: 'Jan, 2021',
    categories: ['Gender Equality'],
    content: `

      <p>Published by Proactive For Her: <a href="https://proactiveforher.com/blogs/feminism/raising-engineers-and-housewives/">Raising Engineers and Housewives</a></p>
      <p>I was blabbering away to my parents about this friend, Sasha, at school. Sasha and I were best friends. We’d do everything together, whether it was, playing in the dollhouse at school together, or drawing the sky in all shades of pink (it was our favorite color), or dragging the stuffed teddy bears around the school yard in the maroon plastic carts Ms. Aarti would let us borrow. We would feed our barbies in the intricately painted tea cups of the miniature kitchen set that we considered a prized possession of ours and braid my hair in all sorts of ways and later stifle our giggles at the wild haystack we had created on the top of my head. </br></br>
My parents seemed thrilled about meeting Sasha but when I did introduce them to my friend, their terrified faces at Sasha’s towering self, cropped hair convinced me otherwise. “Oh, he’s a boy!”, they half-squealed.</br></br>
The ecstacy and emotions involved with the birth of a baby in the family are unparalleled. We have learned to love a new life in ways so deeply ingrained within ourselves, that the baby is held in standards high as we never held ourselves in.</br></br>
While we claim ourselves to be the most liberal of parents and vow to let our children indulge in the uncanniest of fantasies, we can already see the lawyer in them demanding their right to attention in the courts of the cradle, or the engineer maybe when they enthusiastically fix up the red plastic road tracks to let the monstrous juggernauts pass through.</br></br>
Let us see how you fared on the test my parents took when Sasha once materialized on our doorstep. Was it the doll house that betrayed you or his strange choice of colour, pink that neglected the sufficiently masculine blue and brown he could have chosen? Was it the teddy bears or the barbies that were heartily invited to the tea parties that led you to believe he was a she? Was it his interest in intricate braids and hairdos or was it his name itself that ended in an ‘a’?</br></br>
Let us understand that the early years of a child are the prime years of development of the brain (as is extensively elaborated by Daniel Goleman in ‘Emotional Intelligence’). “How parents treat their children – Whether with harsh discipline or with empathic understanding, with indifference or warmth, and so on – has deep and lasting consequences for the child’s emotional life.”</br></br>
Simone De Bouveaur’s ‘The Second Sex’ candidly exposes how the gender dynamics play out. The way a child is treated, is talked to, the toys a child is left to play with and the emotions a child is subjected to (love/ distress/ sternness) take an immense role in constituting what the toddler becomes 20 years after her or his birth. These attributes have a very direct connection with the future adult, independent, fully functional self.</br></br>
I cannot help but point out two harsh, bold and remarkably candid illustrations from her book.“While the boy seeks in himself in the penis as an autonomous subject, the little girl cuddles her doll and dresses her up as she dreams of being cuddled and dressed up herself; inversely, she thinks of herself as a marvelous doll. By means of compliments and scoldings, through images and words, she learns the meaning of the term pretty and plain; she soon learns that in order to be pleasing she must be ‘pretty as a picture’; she tries to make herself look like a picture, she puts on fancy clothes, she studies herself in a mirror, she compares herself with princesses and fairies.”</br></br>

Does this perspective explain why it is often stereotyped that women take longer to get ready for a party? It is stereotyped so because they do! Does it explain why it is held that women worry about their ‘looks’ and ‘figures’ more than men do? It is held so because they do! But only because we told them to! We shoved the dolls in their hands, we shoved the mirrors on their faces and we shoved the fates on their lives.</br></br>
“The little boy, in contrast, will be denied even coquetry; his efforts at enticement, his play-acting, are irritating. He is told that ‘a man doesn’t ask to be kisse, a man doesn’t look at himself in mirror, a man doesn’t cry. He is urged to be ‘a little man’, he will obtain adult approval by becoming independent of adults. He will please them by not appearing to seek to please them.”</br></br>
Does this explain why angry fathers resort to alcohol over emotional discussions about their demanding lives? Does it explain why 12 of the 14 stoic, athletic, mighty Avengers’ characters in the famed film series were men? We shoved the rifles in their hands, we shoved the masculinity on their faces and we shoved the fate on their lives.</br></br>
Let us brace ourselves for this next career option: While other fellow guardians are prematurely sure of their lawyers and engineers, do some of us then already see our beloved toddlers as housewives or househusbands when we hand them plastic kitchen sets to play with, or the life sized dolls to take care of and nurture?</br></br>
It is no secret then that the careers our children choose are hardly their original picks after all. Paralelly, the roles our children take up in marriage are also barely decisions of their own making. Their characters merely reflect what was taught at a young age, that is, our girls will involve in daily homely chores and our boys will most definitely not cry lest their precious masculinity be questioned.</br></br>
What our children have seen confirmed among their peers (who also like pink and have the 8-piece kitchen sets (think female) or who also play violent video games and fix up red Hot Wheels race tracks (think male)) become foundations of the kind of roles they are supposed to take in life.</br></br>
Let us then, avoid an arrogant dismissal of the society that has brought up infants and groomed them for over 10,000 years, by considering the worrisome argument that if girls are not taught to be “women” (as another word for caregivers, homemakers) then who might bring up the children(?), how might our little ones learn their manners(?) or who might clean up the house(?) and who might cook the three meals(?). If not them then who?</br></br>
As rational human beings, you and I understand that a division of roles and responsibilities is necessary for our communities to thrive. Borrowing insights from Dr. B.R. Ambedkar’s controversial, though profoundly seminal speech ‘Annihilation of Caste’, the one that was prematurely assassinated and remains undelivered, I am compelled to point out that although a “division of labor” might be necessary, it does not in any manner imply the “division of laborers”. In different words, it is imperative that someone does the dishes and that someone mops the floor but it is not obvious that the accident of birth governs who that someone is.</br></br>
Tragically, the gender roles we don today conveniently draw parallels from the infamous caste system in that the division of labor is based not on choice but rather on “the dogma of predestination”, in the words of Dr. Ambedkar. It is rather appalling how we have dutifully nurtured oppression within the mud or concrete walls of our domestic belonging.</br></br>
As Nivedita Menon points out in ‘Seeing Like a Feminist’, if no one took responsibility for the homely chores services would have to be hired for a wage. Thus, this seeming worthlessness of the job usually performed by women out of a sense of “domestic responsibility” ingrained in childhood undermines the value and importance of the work performed. The earning member in the family might be thanked overtly or simply by depending upon for life but the homemaker’s work is taken for granted. This is why the ‘division of laborers’ system proves inequitable and discriminatory to me.</br></br>
It might seem fairer then to let our children make their own choices, to encourage them equally in their education as well sports, to applaud their talents no matter how unconventional, to encourage our boys to take up Bharatanatyam and our girls to master boxing, to not choose their favorite colors for them even before their birth at color-coded baby showers or tying colored headbands to force their gender on them, to teach them to be self sufficient by being able to cook, clean and earn for themselves but primarily and very importantly, to let them choose their gender for themselves, be it male, female or anywhere they like on the gender spectrum.</br></br>
Let us not bring up any more shackled kids into the world.
</p>
          `
  },
  {
    id: '3',
    title: 'Book Review: Ain’t I a Woman? Black Women and Feminism by bell hooks',
    date: 'September, 2021',
    categories: ['Feminism'],
    content: `

    <p>Published by Feminism in India: <a href="https://feminisminindia.com/2021/09/22/book-review-aint-i-a-woman-black-women-feminism-by-bell-hooks/">Book Review | Ain’t I A Woman: Black Women & Feminism By bell hooks</a></p>


<p>Gloria Jean Watkins is a social activist who became one of the first authors to compile the black female experience though slavery and political emancipation in America. She wrote under the pseudonym of bell hooks, a name borrowed from her maternal grandmother to honor female legacies, and written in lowercase to draw attention to her message rather than herself.</p>

<p>In her first book, ‘Ain’t I a Woman: Black Women and Feminism’, she sheds light on the life of the black woman in America in the 19th and 20th centuries. We are introduced to a figure who starts off as a physically and sexually abused, overworked slave, then morphs into a dutiful and sexually abused, overworked mother and further into capitalism’s overworked puppet, who continues to be sexually abused more often than not.</p>

<p>hooks brings out the clumsiness that not only accompanied the infantile stages of feminist ideology but also clung through two whole centuries of struggle. Almost till the end of its vigor it was only recognized as a white women’s movement. Unfortunately for black women an active participation in the feminist movement meant compromising the integrity of the black rights movement and vice versa. Siding with white women implied endorsing their racism while supporting black men further enabled the patriarchal social order. Because the term ‘blacks’ referred to black men and ‘women’ referred to white women, black women existed neither on paper, nor in speech.</p>

<p>The book elaborates how slavery has often been shockingly described as de-masculinization of black men. This notion leaves the aggressiveness of black female oppression entirely obscured. bell hooks clarifies that it wasn’t sexual lust that instigated the mass rape of black girls/women by white men but the need to obtain absolute allegiance to the white imperial order instead. The terrorism was situated in demoralization and dehumanization of black women. I, a far more privileged 21st century citizen of the world, continue to hear about or witness the demoralization that seemingly worked as expected and has lasted longer still.</p>

<p>Although it is a story of American feminists’ struggles of the last two centuries, it is not too hard to trace our although, comparatively scanty but real battles back to theirs then.</p>

<p>‘In fundamentalist Christian teaching woman was portrayed as an evil sexual temptress, the bringer of sin into the world.’ Subsequent socialization of white men allowed them to rationalize the rape of their female slaves whether they were 14 or 41. Since every black woman was considered a slut with loose sexual morals, abusing her sexually was deemed not only justified, but also logical. A sociological study of low income black male-female relationships had revealed that most boys referred to black women as “that bitch” or “that whore”. Besides acknowledging how demeaning that is to prostitutes, I must ask if such vituperation is all so archaic and unheard of today. The portrayal of women in the media today has its roots in identifying women as sexual temptresses then. It is quite possibly why the female actress is often scantily clothed, why lives of women on TV revolve entirely around men and why pornography increasingly presents the male perspective. The female perspective is already known, women can’t wait to be raped.</p>

<p>‘In the 19th century, the growing economic prosperity of white Americans caused them to stray from the stern religious teachings that had shaped the life of the first colonizers.’ hooks alludes that women who were once seen as sexual savages began to be praised as the ‘nobler half of humanity whose duty was to elevate men’s sentiments and inspire their higher impulses.’ The price that women had to pay to transcend to this pedestal was to completely forgo any sexual desire lest their “true motives” be exposed. This explains why we are often compelled to simply respond to romantic advances but not make any of our own. If we are too candid then we’re too slutty. While white women were allowed to assume these noble roles, black women were heavily stereotyped in the media, either as overweight women with distorted features or long-suffering, self-sacrificing maternal figures. This portrayal was used to romanticize the strenuous life of black women much like our mothers are often revered for managing their children, kitchen, household chores along with full-time jobs. It is not beautiful or godly, it is abuse, it is entitled unpaid labor and it is exploitation.</p>

<p>A recurring theme in the book is the theory of the existence of a black matriarchy. Male social scientists needed to justify ‘the independent and decisive role black women played within the black family structure.’ hooks mocks them by comparing girls playing house/acting as the mother with matriarchs, ‘for in both instances, no real effective power exists that allows the females in question to control their own destiny.’ Today this myth surfaces when bridegrooms are jokingly warned about their soon to be lost freedom and independence. It is a hackneyed ice breaker during middle and upper class gatherings. The tunes of “zamama toh hai naukar biwi ka” (“the world today is a servant of the wife”) have motivated many a man into melodramatic dancing at evening parties. Black women were left debating whether they still needed a feminist movement afterall.</p>

<p>The book was published in 1981 and discusses the late 18th, 19th and the early 20th centuries but the themes discussed in the book are very relevant today. hooks discusses how it wasn’t feminism that got women working but capitalism that needed women to work alongside men to pay the bills. She exposes capitalist patriarchy that fools men into punctually performing dehumanizing duties. They restore their lost sense of power by violence against women. Furthermore, bell hooks suggests that feminism then offered women ‘not liberation but the right to act as surrogate men.’ She ends on a relatively hopeful note by declaring that the women who have the strength to see past the rape and slaughter must persevere to be ‘no longer victimized, no longer unrecognized, no longer afraid’ so that others can take courage and follow. The book’s titular speech by Sojourner Truth questions why black women aren’t treated with respect. She protests about her thirteen children being sold, she argues against the inhumane treatment at the Women’s Rights Convention in Old Stone Church, Ohio in 1851 and she asks, “Ain’t I a woman?”</p>


    `
  }
];

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-cyan hover:underline">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/blog" className="flex items-center text-navy hover:text-cyan transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy">{post.title}</h1>
          
          <div className="flex items-center text-navy/60 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.categories.map(category => (
              <span 
                key={category}
                className="text-xs font-mono px-2 py-1 rounded-full bg-cyan/10 text-cyan"
              >
                {category}
              </span>
            ))}
          </div>
        </header>
        
        <div 
          className="blog-content prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
