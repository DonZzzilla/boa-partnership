const DIAGRAMS = [];
DIAGRAMS.push({id: "01-partnership-overview", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="auto" style="display:block;margin:0 auto;max-width:100%;">
<rect width="1200" height="700" fill="#0a0b0e"/>
<text x="600.0" y="30.0" dy="1em" font-size="28" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">BOA × CWS Partnership Overview</text>
<text x="600.0" y="70.0" dy="1em" font-size="14" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Three initiatives. One shared mission.</text>
<rect x="60" y="130" width="300" height="500" rx="8" fill="#111318" stroke="#2a2e3a" stroke-width="2" opacity="1.0"/>
<text x="210.0" y="145.0" dy="1em" font-size="14" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">BATTLEFIELD OPERATION</text>
<text x="210.0" y="168.0" dy="1em" font-size="18" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">AND AWARENESS (BOA)</text>
<rect x="85" y="215" width="250" height="90" rx="8" fill="#181b22" stroke="#d4a853" stroke-width="1" opacity="0.7"/>
<text x="95" y="225.0" dy="1em" font-size="16" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">200+ volunteers</text>
<text x="95" y="248.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Mentorship · Events</text>
<text x="95" y="266.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Wiki · Support</text>
<rect x="85" y="325" width="250" height="120" rx="8" fill="#181b22" stroke="#3a3e4e" stroke-width="1" opacity="0.8"/>
<text x="95" y="332.0" dy="1em" font-size="12" fill="#e05555" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">NEEDS</text>
<text x="95" y="352.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Less manual work</text>
<text x="95" y="368.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Better recognition</text>
<text x="95" y="385.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Knowledge capture</text>
<text x="95" y="402.4" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• EU coverage</text>
<text x="95" y="419.2" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Automation tools</text>
<rect x="85" y="465" width="250" height="145" rx="8" fill="#181b22" stroke="#3a3e4e" stroke-width="1" opacity="0.8"/>
<text x="95" y="472.0" dy="1em" font-size="12" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">BRINGS WILLINGNESS</text>
<text x="95" y="492.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• 150+ events run</text>
<text x="95" y="508.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• 50+ leaders mentored</text>
<text x="95" y="525.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• 12 open-source tools</text>
<text x="95" y="542.4" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Dedicated volunteers</text>
<text x="95" y="559.2" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Deep community trust</text>
<rect x="840" y="130" width="300" height="500" rx="8" fill="#111318" stroke="#2a2e3a" stroke-width="2" opacity="1.0"/>
<text x="990.0" y="145.0" dy="1em" font-size="14" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">COMBAT WAFFLE</text>
<text x="990.0" y="168.0" dy="1em" font-size="18" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">STUDIOS (CWS)</text>
<rect x="865" y="215" width="250" height="90" rx="8" fill="#181b22" stroke="#5b8dee" stroke-width="1" opacity="0.7"/>
<text x="875" y="225.0" dy="1em" font-size="16" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Ghost of Tabor Game</text>
<text x="875" y="248.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Dev· Publishing</text>
<text x="875" y="266.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Community Management</text>
<rect x="865" y="325" width="250" height="120" rx="8" fill="#181b22" stroke="#3a3e4e" stroke-width="1" opacity="0.8"/>
<text x="875" y="332.0" dy="1em" font-size="12" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">CAN PROVIDE</text>
<text x="875" y="352.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Technical infrastructure</text>
<text x="875" y="368.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Hosting &amp; monitoring</text>
<text x="875" y="385.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Security review</text>
<text x="875" y="402.4" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Developer consultation</text>
<text x="875" y="419.2" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Community data access</text>
<rect x="865" y="465" width="250" height="145" rx="8" fill="#181b22" stroke="#3a3e4e" stroke-width="1" opacity="0.8"/>
<text x="875" y="472.0" dy="1em" font-size="12" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">GAINS FROM PARTNERSHIP</text>
<text x="875" y="492.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Stronger player community</text>
<text x="875" y="508.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Better player retention</text>
<text x="875" y="525.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Community goodwill</text>
<text x="875" y="542.4" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Brand visibility</text>
<text x="875" y="559.2" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">• Reduced speculation</text>
<rect x="420" y="130" width="360" height="500" rx="8" fill="#111318" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="600.0" y="150.0" dy="1em" font-size="20" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">COLLABORATION</text>
<text x="600.0" y="178.0" dy="1em" font-size="13" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Three Connected Initiatives</text>
<rect x="445" y="215" width="310" height="110" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="2" opacity="1.0"/>
<text x="455" y="222.0" dy="1em" font-size="14" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">01 BOA OPERATIONS BOT</text>
<text x="455" y="244.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Session tracking · Recognition</text>
<text x="455" y="260.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Ticket analytics · Auto-reporting</text>
<text x="455" y="277.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">642-876 hrs/yr saved</text>
<rect x="445" y="340" width="310" height="110" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="455" y="347.0" dy="1em" font-size="14" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">02 RECOGNITION PROGRAM</text>
<text x="455" y="369.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Milestone tiers · Service records</text>
<text x="455" y="385.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Recommendation letters · Badges</text>
<text x="455" y="402.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">30-40% retention improvement</text>
<rect x="445" y="465" width="310" height="110" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="2" opacity="1.0"/>
<text x="455" y="472.0" dy="1em" font-size="14" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">03 KNOWLEDGE BASE</text>
<text x="455" y="494.0" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">SOPs · Onboarding · Archives</text>
<text x="455" y="510.8" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Decision logs · Role guides</text>
<text x="455" y="527.6" dy="1em" font-size="12" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">40-60% faster onboarding</text>
<defs><marker id="a0" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#d4a853"/></marker></defs>
<path d="M 0 0 L 60 0" stroke="#d4a853" stroke-width="3" fill="none" marker-end="url(#a0)"/>
<defs><marker id="a1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#d4a853"/></marker></defs>
<path d="M 0 0 L -60 0" stroke="#d4a853" stroke-width="3" fill="none" marker-end="url(#a1)"/>
<text x="390.0" y="328.0" dy="1em" font-size="11" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">needs</text>
<text x="810.0" y="328.0" dy="1em" font-size="11" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">supports</text>
<text x="600.0" y="655.0" dy="1em" font-size="12" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Not a transaction. A partnership built on mutual benefit.</text>
</svg>`});
DIAGRAMS.push({id: "02-bot-architecture", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="auto" style="display:block;margin:0 auto;max-width:100%;">
<rect width="1200" height="700" fill="#0a0b0e"/>
<text x="600.0" y="25.0" dy="1em" font-size="26" fill="#5b8dee" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">BOA Bot — Architecture Overview</text>
<text x="600.0" y="58.0" dy="1em" font-size="13" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Automation layer between volunteers and operations</text>
<rect x="60" y="110" width="200" height="160" rx="8" fill="#111318" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="160.0" y="120.0" dy="1em" font-size="16" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">VOLUNTEERS</text>
<text x="160.0" y="148.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Mentors</text>
<text x="160.0" y="166.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Event Leads</text>
<text x="160.0" y="184.4" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Tech Team</text>
<text x="160.0" y="202.6" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Moderators</text>
<text x="160.0" y="220.8" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">New Members</text>
<rect x="440" y="110" width="320" height="580" rx="8" fill="#111318" stroke="#5b8dee" stroke-width="3" opacity="1.0"/>
<text x="600.0" y="120.0" dy="1em" font-size="18" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">BOA OPERATIONS BOT</text>
<text x="600.0" y="145.0" dy="1em" font-size="11" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Python · discord.py · PostgreSQL</text>
<rect x="460" y="175" width="280" height="85" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="470" y="180.0" dy="1em" font-size="12" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">SESSION TRACKING</text>
<text x="470" y="198.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Schedule · Log attendance</text>
<text x="470" y="213.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Auto-reminders</text>
<text x="470" y="228.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Timestamp recording</text>
<rect x="460" y="272" width="280" height="85" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="470" y="277.0" dy="1em" font-size="12" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">RECOGNITION ENGINE</text>
<text x="470" y="295.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Milestone tracking</text>
<text x="470" y="310.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Badge awards</text>
<text x="470" y="325.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Celebration messages</text>
<text x="470" y="341.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Service records</text>
<rect x="460" y="369" width="280" height="85" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="470" y="374.0" dy="1em" font-size="12" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">TICKET ANALYTICS</text>
<text x="470" y="392.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Auto-routing by skill</text>
<text x="470" y="407.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Priority queuing</text>
<text x="470" y="422.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Response time tracking</text>
<text x="470" y="438.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Resolution logging</text>
<rect x="460" y="466" width="280" height="85" rx="8" fill="#1e2230" stroke="#e05555" stroke-width="1" opacity="1.0"/>
<text x="470" y="471.0" dy="1em" font-size="12" fill="#e05555" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">REPORTING &amp; METRICS</text>
<text x="470" y="489.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Auto-generated reports</text>
<text x="470" y="504.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Volunteer dashboards</text>
<text x="470" y="519.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Trend analysis</text>
<text x="470" y="535.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Impact summaries</text>
<rect x="460" y="563" width="280" height="85" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="470" y="568.0" dy="1em" font-size="12" fill="#d0bfff" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">ONBOARDING WORKFLOWS</text>
<text x="470" y="586.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Welcome sequences</text>
<text x="470" y="601.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Resource delivery</text>
<text x="470" y="616.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Progress tracking</text>
<text x="470" y="632.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Mentor alerts</text>
<rect x="880" y="110" width="260" height="160" rx="8" fill="#111318" stroke="#5b8dee" stroke-width="2" opacity="1.0"/>
<text x="1010.0" y="120.0" dy="1em" font-size="16" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">CWS INFRASTRUCTURE</text>
<text x="1010.0" y="148.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Hosting (VPS/Cloud)</text>
<text x="1010.0" y="166.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Database (PostgreSQL)</text>
<text x="1010.0" y="184.4" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Monitoring &amp; alerts</text>
<text x="1010.0" y="202.6" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Security review</text>
<text x="1010.0" y="220.8" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">API access</text>
<rect x="880" y="310" width="260" height="140" rx="8" fill="#111318" stroke="#55c57a" stroke-width="2" opacity="1.0"/>
<text x="1010.0" y="320.0" dy="1em" font-size="16" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">DATA LAYER</text>
<text x="1010.0" y="348.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">PostgreSQL</text>
<text x="1010.0" y="366.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Redis cache</text>
<text x="1010.0" y="384.4" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Encrypted at rest</text>
<text x="1010.0" y="402.6" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Access controlled</text>
<text x="1010.0" y="420.8" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Data sovereignty: CWS</text>
<rect x="880" y="490" width="260" height="140" rx="8" fill="#111318" stroke="#e05555" stroke-width="2" opacity="1.0"/>
<text x="1010.0" y="500.0" dy="1em" font-size="16" fill="#e05555" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">SECURITY</text>
<text x="1010.0" y="528.0" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">RBAC (7 role levels)</text>
<text x="1010.0" y="546.2" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Minimal permissions</text>
<text x="1010.0" y="564.4" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Audit logging</text>
<text x="1010.0" y="582.6" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Rate limiting</text>
<text x="1010.0" y="600.8" dy="1em" font-size="13" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">No message content storage</text>
<defs><marker id="a0" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#d4a853"/></marker></defs>
<path d="M 0 0 L 180 0" stroke="#d4a853" stroke-width="2" fill="none" marker-end="url(#a0)"/>
<defs><marker id="a1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5b8dee"/></marker></defs>
<path d="M 0 0 L 120 0" stroke="#5b8dee" stroke-width="2" fill="none" marker-end="url(#a1)"/>
<defs><marker id="a2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#55c57a"/></marker></defs>
<path d="M 0 0 L 120 0" stroke="#55c57a" stroke-width="2" fill="none" marker-end="url(#a2)"/>
<defs><marker id="a3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#e05555"/></marker></defs>
<path d="M 0 0 L 120 0" stroke="#e05555" stroke-width="2" fill="none" marker-end="url(#a3)"/>
<text x="350.0" y="170.0" dy="1em" font-size="10" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">interacts</text>
<text x="820.0" y="330.0" dy="1em" font-size="10" fill="#5b8dee" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">runs on</text>
<text x="820.0" y="430.0" dy="1em" font-size="10" fill="#55c57a" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">reads/writes</text>
<text x="820.0" y="540.0" dy="1em" font-size="10" fill="#e05555" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">enforces</text>
<rect x="880" y="660" width="260" height="60" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="1010.0" y="668.0" dy="1em" font-size="13" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">HOSTING COST: ~$40/month</text>
<text x="1010.0" y="688.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">VPS + DB + Monitoring</text>
</svg>`});
DIAGRAMS.push({id: "03-recognition-program", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="auto" style="display:block;margin:0 auto;max-width:100%;">
<rect width="1200" height="700" fill="#0a0b0e"/>
<text x="600.0" y="25.0" dy="1em" font-size="26" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Recognition Program - Milestone System</text>
<text x="600.0" y="58.0" dy="1em" font-size="13" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Every volunteer contribution is tracked, celebrated, and made career-relevant</text>
<rect x="60" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#5b8dee" stroke-width="2" opacity="1.0"/>
<text x="145.0" y="122.0" dy="1em" font-size="12" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">NEWCOMER</text>
<text x="145.0" y="140.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">0-5 hours</text>
<text x="145.0" y="158.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Welcome badge | Orientation | First tasks</text>
<rect x="250" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#55c57a" stroke-width="2" opacity="1.0"/>
<text x="335.0" y="122.0" dy="1em" font-size="12" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">CONTRIBUTOR</text>
<text x="335.0" y="140.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">5-25 hours</text>
<text x="335.0" y="158.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Contributor badge | Role assignment | Bot access</text>
<rect x="440" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="525.0" y="122.0" dy="1em" font-size="12" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">VETERAN</text>
<text x="525.0" y="140.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">25-75 hours</text>
<text x="525.0" y="158.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Gold badge | Mentor eligibility | Letter eligible</text>
<rect x="630" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#d0bfff" stroke-width="2" opacity="1.0"/>
<text x="715.0" y="122.0" dy="1em" font-size="12" fill="#d0bfff" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">MENTOR</text>
<text x="715.0" y="140.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">75-200 hours</text>
<text x="715.0" y="158.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Purple badge | Co-branding letter | Leadership track</text>
<rect x="820" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#e05555" stroke-width="2" opacity="1.0"/>
<text x="905.0" y="122.0" dy="1em" font-size="12" fill="#e05555" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">OFFICER</text>
<text x="905.0" y="140.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">200-500 hours</text>
<text x="905.0" y="158.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Red badge | Full letter program | Governance role</text>
<rect x="1010" y="115" width="170" height="90" rx="8" fill="#181b22" stroke="#d4a853" stroke-width="3" opacity="1.0"/>
<text x="1095.0" y="122.0" dy="1em" font-size="12" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">LEGEND</text>
<text x="1095.0" y="140.0" dy="1em" font-size="10" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">500+ hours</text>
<text x="1095.0" y="158.0" dy="1em" font-size="10" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Hall of Service | Premium letter | Lifetime recognition</text>
<defs><marker id="a0" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5a5e72"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#5a5e72" stroke-width="2" fill="none" marker-end="url(#a0)"/>
<defs><marker id="a1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5a5e72"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#5a5e72" stroke-width="2" fill="none" marker-end="url(#a1)"/>
<defs><marker id="a2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5a5e72"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#5a5e72" stroke-width="2" fill="none" marker-end="url(#a2)"/>
<defs><marker id="a3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5a5e72"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#5a5e72" stroke-width="2" fill="none" marker-end="url(#a3)"/>
<defs><marker id="a4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#5a5e72"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#5a5e72" stroke-width="2" fill="none" marker-end="url(#a4)"/>
<rect x="80" y="250" width="500" height="280" rx="8" fill="#111318" stroke="#55c57a" stroke-width="2" opacity="1.0"/>
<text x="100" y="262.0" dy="1em" font-size="14" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">RETENTION IMPACT</text>
<rect x="100" y="295" width="460" height="28" rx="8" fill="#1e2230" stroke="#2a2e3a" stroke-width="1" opacity="1.0"/>
<rect x="100" y="295" width="161" height="28" rx="4" fill="#e05555" stroke="#e05555" stroke-width="1" opacity="0.8"/>
<text x="180.0" y="299.0" dy="1em" font-size="11" fill="#e05555" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">CURRENT: 35%</text>
<text x="270" y="299.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">12-month retention</text>
<rect x="100" y="333" width="460" height="28" rx="8" fill="#1e2230" stroke="#2a2e3a" stroke-width="1" opacity="1.0"/>
<rect x="100" y="333" width="322" height="28" rx="4" fill="#d4a853" stroke="#d4a853" stroke-width="1" opacity="0.8"/>
<text x="260.0" y="337.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">+ RECOGNITION: 45-49%</text>
<text x="430" y="337.0" dy="1em" font-size="10" fill="#d4a853" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">(+30-40%)</text>
<rect x="100" y="371" width="460" height="28" rx="8" fill="#1e2230" stroke="#2a2e3a" stroke-width="1" opacity="1.0"/>
<rect x="100" y="371" width="406" height="28" rx="4" fill="#55c57a" stroke="#55c57a" stroke-width="1" opacity="0.8"/>
<text x="302.5" y="375.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">+ BOT + KB: 55-65%</text>
<text x="510" y="375.0" dy="1em" font-size="10" fill="#55c57a" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">(+60%)</text>
<rect x="100" y="415" width="460" height="100" rx="8" fill="#181b22" stroke="#3a3e4e" stroke-width="1" opacity="1.0"/>
<text x="115" y="425.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">78% want more recognition</text>
<text x="115" y="443.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">30-40% retention improvement</text>
<text x="115" y="461.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Near-zero program cost</text>
<text x="115" y="479.0" dy="1em" font-size="11" fill="#d0bfff" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">3-5 month full rollout</text>
<text x="115" y="497.0" dy="1em" font-size="11" fill="#e05555" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Career-value letters for volunteers</text>
<rect x="620" y="250" width="540" height="280" rx="8" fill="#111318" stroke="#5b8dee" stroke-width="2" opacity="1.0"/>
<text x="640" y="262.0" dy="1em" font-size="14" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">VOLUNTEER CAREER VALUE</text>
<rect x="635" y="290" width="245" height="65" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="645" y="296.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">SKILLS TRANSLATION</text>
<text x="645" y="312.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">BOA roles mapped to professional competencies</text>
<rect x="635" y="365" width="245" height="65" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="645" y="371.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">RECOMMENDATION LETTERS</text>
<text x="645" y="387.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Co-branded | Written by leadership | 4 pathways</text>
<rect x="635" y="440" width="245" height="65" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="645" y="446.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">SERVICE RECORDS</text>
<text x="645" y="462.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Verifiable log | Exportable | Privacy controlled</text>
<rect x="900" y="290" width="245" height="130" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="910" y="296.0" dy="1em" font-size="11" fill="#d0bfff" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">QUARTERLY AWARDS</text>
<text x="910" y="312.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">5 categories | Peer-nominated | Hall of Service | Digital badges | LinkedIn shareable</text>
<rect x="900" y="440" width="245" height="65" rx="8" fill="#1e2230" stroke="#e05555" stroke-width="1" opacity="1.0"/>
<text x="910" y="446.0" dy="1em" font-size="11" fill="#e05555" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">MILESTONE PATH</text>
<text x="910" y="462.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">6 tiers from Newcomer to Legend | Hour-based</text>
</svg>`});
DIAGRAMS.push({id: "04-knowledge-base", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="auto" style="display:block;margin:0 auto;max-width:100%;">
<rect width="1200" height="700" fill="#0a0b0e"/>
<text x="600.0" y="25.0" dy="1em" font-size="26" fill="#55c57a" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Knowledge Base — Information Architecture</text>
<text x="600.0" y="58.0" dy="1em" font-size="13" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Organizational memory. Searchable. Living. Zero single points of failure.</text>
<rect x="400" y="100" width="400" height="55" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="3" opacity="1.0"/>
<text x="600.0" y="108.0" dy="1em" font-size="18" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">BOA KNOWLEDGE BASE</text>
<text x="600.0" y="130.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Single source of truth · All volunteers</text>
<rect x="40" y="210" width="200" height="180" rx="8" fill="#111318" stroke="#5b8dee" stroke-width="2" opacity="1.0"/>
<text x="140.0" y="218.0" dy="1em" font-size="13" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">ONBOARDING</text>
<text x="140.0" y="238.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Quick Start</text>
<text x="140.0" y="253.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Role Guides</text>
<text x="140.0" y="268.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">30-Day Plan</text>
<text x="140.0" y="284.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Systems Setup</text>
<text x="140.0" y="299.6" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Policy Accounts</text>
<text x="140.0" y="315.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">FAQ · Escalation</text>
<rect x="260" y="210" width="200" height="180" rx="8" fill="#111318" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="360.0" y="218.0" dy="1em" font-size="13" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">SOPs</text>
<text x="360.0" y="238.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Event Planning</text>
<text x="360.0" y="253.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Recognition Process</text>
<text x="360.0" y="268.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Incident Response</text>
<text x="360.0" y="284.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Monthly Reporting</text>
<text x="360.0" y="299.6" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Moderation Guides</text>
<text x="360.0" y="315.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Communication</text>
<rect x="480" y="210" width="200" height="180" rx="8" fill="#111318" stroke="#55c57a" stroke-width="2" opacity="1.0"/>
<text x="580.0" y="218.0" dy="1em" font-size="13" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">VOLUNTEER RESOURCES</text>
<text x="580.0" y="238.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Shift Checklists</text>
<text x="580.0" y="253.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Common Q&amp;A</text>
<text x="580.0" y="268.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Escalation Paths</text>
<text x="580.0" y="284.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Skills Translation</text>
<text x="580.0" y="299.6" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Growth Guides</text>
<text x="580.0" y="315.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Wellness · Burnout</text>
<rect x="700" y="210" width="200" height="180" rx="8" fill="#111318" stroke="#e05555" stroke-width="2" opacity="1.0"/>
<text x="800.0" y="218.0" dy="1em" font-size="13" fill="#e05555" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">LEADERSHIP</text>
<text x="800.0" y="238.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Decision Log</text>
<text x="800.0" y="253.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Succession Plans</text>
<text x="800.0" y="268.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Templates</text>
<text x="800.0" y="284.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Governance</text>
<text x="800.0" y="299.6" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Strategic Direction</text>
<text x="800.0" y="315.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Meeting Notes</text>
<rect x="920" y="210" width="200" height="180" rx="8" fill="#111318" stroke="#d0bfff" stroke-width="2" opacity="1.0"/>
<text x="1020.0" y="218.0" dy="1em" font-size="13" fill="#d0bfff" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">ARCHIVES</text>
<text x="1020.0" y="238.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Event History</text>
<text x="1020.0" y="253.4" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Retrospectives</text>
<text x="1020.0" y="268.8" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Past Decisions</text>
<text x="1020.0" y="284.2" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Lessons Learned</text>
<text x="1020.0" y="299.6" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Program Evolution</text>
<text x="1020.0" y="315.0" dy="1em" font-size="11" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Annual Reports</text>
<defs><marker id="a0" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 0 55" stroke="#3a3e4e" stroke-width="1.5" fill="none" marker-end="url(#a0)"/>
<defs><marker id="a1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 0 55" stroke="#3a3e4e" stroke-width="1.5" fill="none" marker-end="url(#a1)"/>
<defs><marker id="a2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#d4a853"/></marker></defs>
<path d="M 0 0 L 0 55" stroke="#d4a853" stroke-width="2" fill="none" marker-end="url(#a2)"/>
<defs><marker id="a3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 0 55" stroke="#3a3e4e" stroke-width="1.5" fill="none" marker-end="url(#a3)"/>
<defs><marker id="a4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 0 55" stroke="#3a3e4e" stroke-width="1.5" fill="none" marker-end="url(#a4)"/>
<rect x="40" y="430" width="1080" height="120" rx="8" fill="#111318" stroke="#2a2e3a" stroke-width="1" opacity="1.0"/>
<text x="60" y="442.0" dy="1em" font-size="13" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">NEW VOLUNTEER JOURNEY</text>
<rect x="60" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="135.0" y="476.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Discover BOA</text>
<text x="135.0" y="492.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Public pages</text>
<text x="135.0" y="504.6" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Discord invite</text>
<rect x="230" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="305.0" y="476.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Onboarding</text>
<text x="305.0" y="492.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Self-serve guides</text>
<text x="305.0" y="504.6" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Mentor pairing</text>
<rect x="400" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="475.0" y="476.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">First Role</text>
<text x="475.0" y="492.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">SOPs · Checklists</text>
<text x="475.0" y="504.6" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Supervised tasks</text>
<rect x="570" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="645.0" y="476.0" dy="1em" font-size="11" fill="#d0bfff" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Active Service</text>
<text x="645.0" y="492.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Full access</text>
<text x="645.0" y="504.6" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Recognition starts</text>
<rect x="740" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#e05555" stroke-width="1" opacity="1.0"/>
<text x="815.0" y="476.0" dy="1em" font-size="11" fill="#e05555" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Leadership</text>
<text x="815.0" y="492.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Decision docs</text>
<text x="815.0" y="504.6" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Governance role</text>
<rect x="910" y="468" width="150" height="68" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="985.0" y="476.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Mentor / Alumni</text>
<text x="985.0" y="492.0" dy="1em" font-size="9" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Pay it forward</text>
<text x="985.0" y="504.6" dy="1em" font-size="9" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Hall of Service</text>
<defs><marker id="a5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#3a3e4e" stroke-width="1" fill="none" marker-end="url(#a5)"/>
<defs><marker id="a6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#3a3e4e" stroke-width="1" fill="none" marker-end="url(#a6)"/>
<defs><marker id="a7" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#3a3e4e" stroke-width="1" fill="none" marker-end="url(#a7)"/>
<defs><marker id="a8" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#3a3e4e" stroke-width="1" fill="none" marker-end="url(#a8)"/>
<defs><marker id="a9" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#3a3e4e"/></marker></defs>
<path d="M 0 0 L 20 0" stroke="#3a3e4e" stroke-width="1" fill="none" marker-end="url(#a9)"/>
<rect x="40" y="585" width="1080" height="130" rx="8" fill="#111318" stroke="#2a2e3a" stroke-width="1" opacity="1.0"/>
<text x="60" y="597.0" dy="1em" font-size="13" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">KEY METRICS &amp; BENEFITS</text>
<rect x="60" y="620" width="230" height="75" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="175.0" y="628.0" dy="1em" font-size="20" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">40-60%</text>
<text x="175.0" y="650.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">faster onboarding</text>
<text x="175.0" y="664.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">(with documented processes)</text>
<rect x="310" y="620" width="230" height="75" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="425.0" y="628.0" dy="1em" font-size="20" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">5 SPOFs</text>
<text x="425.0" y="650.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">single points of failure</text>
<text x="425.0" y="664.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">eliminated</text>
<rect x="560" y="620" width="230" height="75" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="675.0" y="628.0" dy="1em" font-size="20" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">3-5x ROI</text>
<text x="675.0" y="650.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">productivity gain per $1</text>
<text x="675.0" y="664.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">invested in knowledge mgmt</text>
<rect x="810" y="620" width="290" height="75" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="955.0" y="628.0" dy="1em" font-size="20" fill="#d0bfff" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">25%</text>
<text x="955.0" y="650.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">of org decisions currently</text>
<text x="955.0" y="664.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">documented (target: 90%+)</text>
</svg>`});
DIAGRAMS.push({id: "05-roadmap-timeline", svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="auto" style="display:block;margin:0 auto;max-width:100%;">
<rect width="1200" height="700" fill="#0a0b0e"/>
<text x="600.0" y="25.0" dy="1em" font-size="26" fill="#d4a853" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Partnership Roadmap — Phased Approach</text>
<text x="600.0" y="58.0" dy="1em" font-size="13" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Quick wins first. Flagship projects next. Scale and sustain.</text>
<rect x="40" y="110" width="340" height="380" rx="8" fill="#111318" stroke="#55c57a" stroke-width="3" opacity="1.0"/>
<text x="210.0" y="120.0" dy="1em" font-size="13" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">PHASE 1 — QUICK WINS</text>
<text x="210.0" y="136.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Weeks 1-8 · Foundation</text>
<rect x="55" y="160" width="310" height="72" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="65" y="166.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Recognition Program Launch</text>
<text x="65" y="182.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Badge design · Milestone config</text>
<text x="65" y="196.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Bot integration · Announcement</text>
<rect x="55" y="242" width="310" height="72" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="65" y="248.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Knowledge Base MVP</text>
<text x="65" y="264.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Core SOPs · Onboarding guides</text>
<text x="65" y="278.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Role pages · Search</text>
<rect x="55" y="324" width="310" height="72" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="65" y="330.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">EU Recruitment Drive</text>
<text x="65" y="346.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Targeted outreach · Flexible roles</text>
<text x="65" y="360.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Time-zone coverage plan</text>
<rect x="55" y="406" width="310" height="72" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="65" y="412.0" dy="1em" font-size="11" fill="#d0bfff" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Bot Requirements Doc</text>
<text x="65" y="428.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Feature spec · Security review</text>
<text x="65" y="442.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Permission model · Hosting plan</text>
<text x="210.0" y="488.0" dy="1em" font-size="10" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Impact: Trust + Momentum</text>
<rect x="430" y="110" width="340" height="380" rx="8" fill="#111318" stroke="#d4a853" stroke-width="3" opacity="1.0"/>
<text x="600.0" y="120.0" dy="1em" font-size="13" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">PHASE 2 — CORE BUILD</text>
<text x="600.0" y="136.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Weeks 9-20 · Development</text>
<rect x="445" y="160" width="310" height="72" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="455" y="166.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">BOA Bot MVP Development</text>
<text x="455" y="182.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Session tracking · Recognition</text>
<text x="455" y="196.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Ticket routing · Auto-reports</text>
<rect x="445" y="242" width="310" height="72" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="455" y="248.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Knowledge Base Expansion</text>
<text x="455" y="264.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Full SOP library · Archives</text>
<text x="455" y="278.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Decision logs · Templates</text>
<rect x="445" y="324" width="310" height="72" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="455" y="330.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Recognition Expansion</text>
<text x="455" y="346.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Letter program · Service records</text>
<text x="455" y="360.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Quarterly awards · Hall of Service</text>
<rect x="445" y="406" width="310" height="72" rx="8" fill="#1e2230" stroke="#e05555" stroke-width="1" opacity="1.0"/>
<text x="455" y="412.0" dy="1em" font-size="11" fill="#e05555" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">SOP Documentation Project</text>
<text x="455" y="428.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">All recurring processes</text>
<text x="455" y="442.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Version controlled · Reviewed</text>
<text x="600.0" y="488.0" dy="1em" font-size="10" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Impact: Efficiency + Retention</text>
<rect x="820" y="110" width="340" height="380" rx="8" fill="#111318" stroke="#5b8dee" stroke-width="3" opacity="1.0"/>
<text x="990.0" y="120.0" dy="1em" font-size="13" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">PHASE 3 — MATURITY</text>
<text x="990.0" y="136.0" dy="1em" font-size="10" fill="#5a5e72" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Weeks 21-52 · Scale and Sustain</text>
<rect x="835" y="160" width="310" height="72" rx="8" fill="#1e2230" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="845" y="166.0" dy="1em" font-size="11" fill="#5b8dee" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Full Bot Deployment</text>
<text x="845" y="182.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">All 5 modules live</text>
<text x="845" y="196.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Analytics dashboard</text>
<text x="845" y="210.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Iterative improvement</text>
<rect x="835" y="242" width="310" height="72" rx="8" fill="#1e2230" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="845" y="248.0" dy="1em" font-size="11" fill="#d0bfff" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Technical Collaboration</text>
<text x="845" y="264.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Joint workshops · Co-authored</text>
<text x="845" y="278.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">content · Open-source projects</text>
<rect x="835" y="324" width="310" height="72" rx="8" fill="#1e2230" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="845" y="330.0" dy="1em" font-size="11" fill="#55c57a" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Cross-Org Content</text>
<text x="845" y="346.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Player education · Transparency</text>
<text x="845" y="360.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Community trust building</text>
<rect x="835" y="406" width="310" height="72" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="845" y="412.0" dy="1em" font-size="11" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Impact Reporting</text>
<text x="845" y="428.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Measurable outcomes</text>
<text x="845" y="442.0" dy="1em" font-size="10" fill="#8b8fa3" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">Annual review · Program iteration</text>
<text x="990.0" y="488.0" dy="1em" font-size="10" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Impact: Scale + Sustainability</text>
<defs><marker id="a0" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#d4a853"/></marker></defs>
<path d="M 0 0 L 1000 0" stroke="#d4a853" stroke-width="3" fill="none" marker-end="url(#a0)"/>
<text x="200.0" y="540.0" dy="1em" font-size="10" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Month 1-2</text>
<text x="570.0" y="540.0" dy="1em" font-size="10" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Month 3-5</text>
<text x="960.0" y="540.0" dy="1em" font-size="10" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">Month 6-12</text>
<text x="195" y="524.0" dy="1em" font-size="14" fill="#55c57a" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">●</text>
<text x="565" y="524.0" dy="1em" font-size="14" fill="#d4a853" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">●</text>
<text x="955" y="524.0" dy="1em" font-size="14" fill="#5b8dee" font-weight="normal" text-anchor="start" font-family="monospace" dominant-baseline="hanging">●</text>
<rect x="40" y="575" width="1120" height="90" rx="8" fill="#1e2230" stroke="#d4a853" stroke-width="2" opacity="1.0"/>
<text x="60" y="585.0" dy="1em" font-size="12" fill="#d4a853" font-weight="bold" text-anchor="start" font-family="monospace" dominant-baseline="hanging">PROJECTED COMBINED IMPACT</text>
<rect x="60" y="608" width="240" height="44" rx="8" fill="#181b22" stroke="#55c57a" stroke-width="1" opacity="1.0"/>
<text x="180.0" y="614.0" dy="1em" font-size="18" fill="#55c57a" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">50%</text>
<text x="180.0" y="632.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">reduced operational overhead</text>
<rect x="320" y="608" width="240" height="44" rx="8" fill="#181b22" stroke="#d4a853" stroke-width="1" opacity="1.0"/>
<text x="440.0" y="614.0" dy="1em" font-size="18" fill="#d4a853" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">40%</text>
<text x="440.0" y="632.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">improvement in retention</text>
<rect x="580" y="608" width="240" height="44" rx="8" fill="#181b22" stroke="#5b8dee" stroke-width="1" opacity="1.0"/>
<text x="700.0" y="614.0" dy="1em" font-size="18" fill="#5b8dee" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">3x</text>
<text x="700.0" y="632.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">increase in community reach</text>
<rect x="840" y="608" width="300" height="44" rx="8" fill="#181b22" stroke="#d0bfff" stroke-width="1" opacity="1.0"/>
<text x="990.0" y="614.0" dy="1em" font-size="18" fill="#d0bfff" font-weight="bold" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">642-876h</text>
<text x="990.0" y="632.0" dy="1em" font-size="9" fill="#8b8fa3" font-weight="normal" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">annual volunteer time saved</text>
</svg>`});
