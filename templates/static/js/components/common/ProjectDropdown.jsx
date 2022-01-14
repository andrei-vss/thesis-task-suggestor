import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav, Dropdown } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import CustomMenu from './CustomMenu'


export default class ProjectDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: undefined
        };
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col >
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                Custom toggle
                            </Dropdown.Toggle>
                            <Dropdown.Menu as={CustomMenu}>
                                <Dropdown.Item onClick={() => this.changeValue(8)} eventKey="8">8 - Q4YOU HTML5</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(9)} eventKey="9">9 - Q4YOU FLEX</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(10)} eventKey="10">10 - __Old Q1000</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(11)} eventKey="11">11 - LVC4</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(12)} eventKey="12">12 - Authenticator</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(13)} eventKey="13">13 - __Old TCwrapper</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(14)} eventKey="14">14 - Formfiller</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(15)} eventKey="15">15 - Resse</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(16)} eventKey="16">16 - Q4U Main application</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(17)} eventKey="17">17 - __Old Trailers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(18)} eventKey="18">18 - __Old Q1000 TC</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(19)} eventKey="19">19 - Development admin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(20)} eventKey="20">20 - Customer admin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(22)} eventKey="22">22 - Infrastructure</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(23)} eventKey="23">23 - Cards</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(24)} eventKey="24">24 - Q1000 Admin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(25)} eventKey="25">25 - Planning Tool</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(26)} eventKey="26">26 - Module Manager</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(27)} eventKey="27">27 - RTD</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(32)} eventKey="32">32 - Labor Market</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(33)} eventKey="33">33 - Brainport</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(39)} eventKey="39">39 - Template Manager</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(41)} eventKey="41">41 - RTP / RTD</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(42)} eventKey="42">42 - Admin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(43)} eventKey="43">43 - Self</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(44)} eventKey="44">44 - TC</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(45)} eventKey="45">45 - Invoice application</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(47)} eventKey="47">47 - eelloo Projects</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(48)} eventKey="48">48 - Tempo Team Online Direct</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(49)} eventKey="49">49 - Stoof vakantiewerk</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(50)} eventKey="50">50 - Leeuwendaal</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(51)} eventKey="51">51 - Yacht - Omgevingsdiensten</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(52)} eventKey="52">52 - Transvorm</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(53)} eventKey="53">53 - Testen XML rapporten</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(54)} eventKey="54">54 - Belastingdienst Workflow</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(55)} eventKey="55">55 - Analytics</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(56)} eventKey="56">56 - Higher en Co (Meurs Assessments)</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(57)} eventKey="57">57 - Interact - contour</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(58)} eventKey="58">58 - Olympia</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(59)} eventKey="59">59 - CAOP</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(60)} eventKey="60">60 - gelukstest</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(61)} eventKey="61">61 - Wrapper Cammio</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(62)} eventKey="62">62 - Zorgportal TT/LD</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(63)} eventKey="63">63 - Randstad banking</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(64)} eventKey="64">64 - Implementatie Handleidingen</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(65)} eventKey="65">65 - eelloo "de standaard"</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(66)} eventKey="66">66 - Tasks RO</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(67)} eventKey="67">67 - gemeente Rotterdam</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(68)} eventKey="68">68 - Wishlist</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(69)} eventKey="69">69 - __Old Report Generator</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(70)} eventKey="70">70 - Q4UDaemon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(71)} eventKey="71">71 - Onderzoeksdatabase</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(72)} eventKey="72">72 - 5Gemeente Venlo VWNW</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(73)} eventKey="73">73 - Divosa</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(74)} eventKey="74">74 - HNA Flex</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(75)} eventKey="75">75 - evaluatieonderzoek</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(76)} eventKey="76">76 - html5 algemeen</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(78)} eventKey="78">78 - CCK</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(79)} eventKey="79">79 - Wrapper Profile Dynamics</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(80)} eventKey="80">80 - Leeuwendaal Mobiliteit</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(81)} eventKey="81">81 - Partou</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(82)} eventKey="82">82 - WSG</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(83)} eventKey="83">83 - Wrapper Ixly</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(84)} eventKey="84">84 - C3</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(85)} eventKey="85">85 - Werken in de sport</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(86)} eventKey="86">86 - Support</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(87)} eventKey="87">87 - Belastingdienst: Team Assessments (PAC)</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(88)} eventKey="88">88 - Algemeen bakje met metafoor</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(89)} eventKey="89">89 - Arbeidsmarktpositiemeter</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(90)} eventKey="90">90 - OOF</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(91)} eventKey="91">91 - Boris</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(92)} eventKey="92">92 - RTP</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(93)} eventKey="93">93 - Alles naar HTML</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(94)} eventKey="94">94 - cck sanoma</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(95)} eventKey="95">95 - Meurs werkt</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(96)} eventKey="96">96 - klein inrichting</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(97)} eventKey="97">97 - ANWB</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(98)} eventKey="98">98 - trius</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(99)} eventKey="99">99 - level 5</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(100)} eventKey="100">100 - mn</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(101)} eventKey="101">101 - NS</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(102)} eventKey="102">102 - Wrappers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(103)} eventKey="103">103 - __Old Q1000 API</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(104)} eventKey="104">104 - ING</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(106)} eventKey="106">106 - Gemeente Korendijk</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(107)} eventKey="107">107 - Werken bij de EU</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(108)} eventKey="108">108 - Alle modules responsive</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(109)} eventKey="109">109 - TMRRW works</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(110)} eventKey="110">110 - maatwerk randstad</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(111)} eventKey="111">111 - Professionals XL</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(112)} eventKey="112">112 - Modules inhoud en kwaliteit</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(114)} eventKey="114">114 - Tempo team</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(115)} eventKey="115">115 - TT CCK</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(116)} eventKey="116">116 - Trainee 010</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(117)} eventKey="117">117 - CCK Vlaams</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(118)} eventKey="118">118 - BD eassessment</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(119)} eventKey="119">119 - NOV</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(120)} eventKey="120">120 - saltro</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(121)} eventKey="121">121 - Blue Carpet</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(122)} eventKey="122">122 - eelloo DOCS</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(123)} eventKey="123">123 - Randstad HTML</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(124)} eventKey="124">124 - Randstad CCK</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(125)} eventKey="125">125 - CCK Direct Service Groep</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(126)} eventKey="126">126 - Trainingsportal</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(127)} eventKey="127">127 - RS Management Trainees</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(128)} eventKey="128">128 - RS Secretarieel (Q1000)</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(129)} eventKey="129">129 - Defensie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(130)} eventKey="130">130 - CML</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(131)} eventKey="131">131 - Timing</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(132)} eventKey="132">132 - Rapport Gelukstest</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(134)} eventKey="134">134 - Backlog</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(135)} eventKey="135">135 - TMG</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(136)} eventKey="136">136 - Meurs Vervoer & Veiligheid</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(137)} eventKey="137">137 - Stroomlijn</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(138)} eventKey="138">138 - Themes</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(139)} eventKey="139">139 - HSK</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(140)} eventKey="140">140 - Kernprogramma managers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(141)} eventKey="141">141 - Gemeente Rotterdam HNA</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(142)} eventKey="142">142 - Janssen</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(143)} eventKey="143">143 - AWO</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(144)} eventKey="144">144 - eelloo intern</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(145)} eventKey="145">145 - Berenschot HNA</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(146)} eventKey="146">146 - RS Transport</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(147)} eventKey="147">147 - RUG PSY</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(148)} eventKey="148">148 - Transavia</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(149)} eventKey="149">149 - unique</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(150)} eventKey="150">150 - Transavia Selectie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(151)} eventKey="151">151 - Transavia ontwikkel</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(152)} eventKey="152">152 - FlexAssessment</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(153)} eventKey="153">153 - Gemeente Capelle a/d ijsel</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(154)} eventKey="154">154 - Start People</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(155)} eventKey="155">155 - CCK Nuon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(156)} eventKey="156">156 - CCK UWV</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(157)} eventKey="157">157 - CCK Nuon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(158)} eventKey="158">158 - Kayako inrichting</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(159)} eventKey="159">159 - Nationale Nederlanden</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(160)} eventKey="160">160 - HNA Basis 'de standaard'</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(161)} eventKey="161">161 - Unique Transavia Duitsland (engelstalig)</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(162)} eventKey="162">162 - Tempo Team Politie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(163)} eventKey="163">163 - consolid</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(164)} eventKey="164">164 - ING Reorganisaties</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(165)} eventKey="165">165 - Ocaro</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(166)} eventKey="166">166 - Beter Leren Leven</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(167)} eventKey="167">167 - SVRZ</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(168)} eventKey="168">168 - ECOP</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(169)} eventKey="169">169 - Promotie onderzoek proactief loopbaangedrag</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(170)} eventKey="170">170 - Interventie studie ePortfolio studenten</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(171)} eventKey="171">171 - Adidas</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(172)} eventKey="172">172 - kasbank</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(173)} eventKey="173">173 - compagnon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(174)} eventKey="174">174 - Mazda</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(175)} eventKey="175">175 - Testcenter</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(176)} eventKey="176">176 - EC koppeling Talentsoft HTML5</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(177)} eventKey="177">177 - Compagnon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(178)} eventKey="178">178 - RvdB</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(179)} eventKey="179">179 - Implicit - De Unie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(180)} eventKey="180">180 - careerFWD</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(181)} eventKey="181">181 - competence card</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(182)} eventKey="182">182 - Meertaligheid</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(183)} eventKey="183">183 - APQ</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(184)} eventKey="184">184 - CPM</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(185)} eventKey="185">185 - MCS</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(186)} eventKey="186">186 - Wrapper Watson Personality</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(187)} eventKey="187">187 - DJI</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(188)} eventKey="188">188 - Welkom</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(189)} eventKey="189">189 - Securitas</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(190)} eventKey="190">190 - UWV wajong</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(191)} eventKey="191">191 - ING eAssessment</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(192)} eventKey="192">192 - Textkernel</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(193)} eventKey="193">193 - eelloo</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(194)} eventKey="194">194 - Bridge</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(195)} eventKey="195">195 - Tangram</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(196)} eventKey="196">196 - Digitale Quickscan Defensie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(197)} eventKey="197">197 - arbeidsmarktverkenner_NL</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(198)} eventKey="198">198 - HR Store</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(200)} eventKey="200">200 - Academies</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(201)} eventKey="201">201 - Het nieuwe testcentrum</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(202)} eventKey="202">202 - sourceright</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(203)} eventKey="203">203 - PON</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(204)} eventKey="204">204 - KLM Recruitment</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(205)} eventKey="205">205 - Backlog - Content</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(206)} eventKey="206">206 - aegon</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(207)} eventKey="207">207 - Gemeente Rotterdam SSA</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(208)} eventKey="208">208 - Manpower</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(209)} eventKey="209">209 - KLM - selectiedag</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(210)} eventKey="210">210 - Traineeship Gemeente Amsterdam</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(211)} eventKey="211">211 - RITP</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(212)} eventKey="212">212 - NPO</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(213)} eventKey="213">213 - KvK- APQ</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(214)} eventKey="214">214 - Scripts</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(215)} eventKey="215">215 - spirit</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(217)} eventKey="217">217 - coolblue</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(218)} eventKey="218">218 - Trainee portal Rotterdam</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(219)} eventKey="219">219 - zorg aan zet</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(220)} eventKey="220">220 - HR Solutions</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(221)} eventKey="221">221 - KLM Corporate Management Traineeship</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(222)} eventKey="222">222 - BZK Flex</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(223)} eventKey="223">223 - naarEELLOO</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(224)} eventKey="224">224 - Workflow</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(225)} eventKey="225">225 - Curriculum.nu</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(226)} eventKey="226">226 - Indooruitstroom</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(227)} eventKey="227">227 - Verbond van verzekeraars</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(228)} eventKey="228">228 - HNA portal 2.0</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(229)} eventKey="229">229 - Aedes</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(230)} eventKey="230">230 - Saxion</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(231)} eventKey="231">231 - WUR</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(232)} eventKey="232">232 - Pon-IT</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(233)} eventKey="233">233 - GGD mijn impact</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(234)} eventKey="234">234 - cyclus</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(235)} eventKey="235">235 - Derks en Derks</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(236)} eventKey="236">236 - Ministerie van INW</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(238)} eventKey="238">238 - Sbuddy</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(239)} eventKey="239">239 - Koppeling APQ en TalentSoft</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(241)} eventKey="241">241 - BMC talent</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(242)} eventKey="242">242 - Migrate the bloody trailers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(243)} eventKey="243">243 - HTML presentatie</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(244)} eventKey="244">244 - de nieuwe resse</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(245)} eventKey="245">245 - mijn verhaal</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(246)} eventKey="246">246 - _Roadmap: Q4YOU</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(247)} eventKey="247">247 - _Roadmap: Services & Diagnostics</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(248)} eventKey="248">248 - _Roadmap: Analytics & Data Visualization</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(249)} eventKey="249">249 - _Epic: General</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(250)} eventKey="250">250 - _Tasks</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(251)} eventKey="251">251 - _Epic: Customers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(252)} eventKey="252">252 - _Epic: Programs</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(253)} eventKey="253">253 - JOGG</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(254)} eventKey="254">254 - Standaard mijn impact</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(255)} eventKey="255">255 - Q4you</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(256)} eventKey="256">256 - Services & Diagnostics</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(257)} eventKey="257">257 - Safe and secure</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(258)} eventKey="258">258 - Connectivity</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(259)} eventKey="259">259 - Nice and Sexy</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(260)} eventKey="260">260 - clean_up</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(261)} eventKey="261">261 - Labormarket</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(262)} eventKey="262">262 - Mobile App</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(263)} eventKey="263">263 - Wrapper Arctic Shores</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(264)} eventKey="264">264 - Script MCS Scales</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(265)} eventKey="265">265 - Script MCS Variables</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(266)} eventKey="266">266 - Script Reports</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(267)} eventKey="267">267 - Script Rules</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(268)} eventKey="268">268 - Script Testcenter Scales</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(269)} eventKey="269">269 - Script Testcenter Variables</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(270)} eventKey="270">270 - AppLog</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(271)} eventKey="271">271 - Wrapper Cebir</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(272)} eventKey="272">272 - Wrapper Hogrefe</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(273)} eventKey="273">273 - Wrapper IMotive</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(274)} eventKey="274">274 - Wrapper Monsterboard</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(275)} eventKey="275">275 - Wrapper Noa</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(276)} eventKey="276">276 - Wrapper Odin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(277)} eventKey="277">277 - Wrapper Scharley</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(278)} eventKey="278">278 - Wrapper TKService</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(279)} eventKey="279">279 - Wrapper TStation</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(280)} eventKey="280">280 - Wrapper Cute</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(281)} eventKey="281">281 - Wrapper IG</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(282)} eventKey="282">282 - Wrapper Talentcentral</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(283)} eventKey="283">283 - Wizard</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(284)} eventKey="284">284 - AppLock</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(285)} eventKey="285">285 - Labor Market Importers</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(286)} eventKey="286">286 - Labor Market Importer TK Vacancies</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(287)} eventKey="287">287 - Wrappers for External APIs</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(288)} eventKey="288">288 - WrAPI TK JobFeed</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(289)} eventKey="289">289 - Satellites</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(290)} eventKey="290">290 - Q4UCleaner</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(291)} eventKey="291">291 - Dreams</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(292)} eventKey="292">292 - Ambitions</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(293)} eventKey="293">293 - Initiatives</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(294)} eventKey="294">294 - Labor Market Importer CSO Vacancies</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(295)} eventKey="295">295 - Labor Market Importer PeopleXS</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(296)} eventKey="296">296 - Labor Market Importer Redmine</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(297)} eventKey="297">297 - Q4UExporter</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(298)} eventKey="298">298 - WrAPI Arctic Shores</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(299)} eventKey="299">299 - WrAPI Cammio</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(300)} eventKey="300">300 - WrAPI Cebir</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(301)} eventKey="301">301 - WrAPI CSO</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(302)} eventKey="302">302 - WrAPI Cute</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(303)} eventKey="303">303 - WrAPI Hogrefe</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(304)} eventKey="304">304 - WrAPI IG</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(305)} eventKey="305">305 - WrAPI IMotive</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(306)} eventKey="306">306 - WrAPI Ixly</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(307)} eventKey="307">307 - WrAPI Monsterboard</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(308)} eventKey="308">308 - WrAPI NOA</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(309)} eventKey="309">309 - WrAPI Odin</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(310)} eventKey="310">310 - WrAPI PeopleXS</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(311)} eventKey="311">311 - WrAPI Profile Dynamics</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(312)} eventKey="312">312 - WrAPI SBB</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(313)} eventKey="313">313 - WrAPI Scharley</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(314)} eventKey="314">314 - WrAPI Sourcebox</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(315)} eventKey="315">315 - WrAPI Springest</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(316)} eventKey="316">316 - WrAPI Talent Central</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(317)} eventKey="317">317 - WrAPI TStation</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.changeValue(318)} eventKey="318">318 - WrAPI Watson</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col >
                </Row>
            </Container>
        )
    }

    changeValue(id, label) {
        this.setState({
            selected: {
                value: id,
                label: label
            }
        })
    }

    getValue() {
        return this.state.selected
    }
}
