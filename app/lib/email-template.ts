/**
 * AIML Club OCT — Premium UI/UX HTML Welcome Email Template
 * Universally styled for Gmail, Apple Mail, Outlook, and Mobile Email Clients.
 */

export function getWelcomeEmailHtml(recipientEmail?: string, recipientName?: string): string {
  const displayName = recipientName && recipientName.trim().length > 0 ? recipientName.trim() : "AIML Club Member";
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AIML Club OCT</title>
</head>
<body style="margin: 0; padding: 0; background-color: #06080a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9; -webkit-font-smoothing: antialiased;">
  <!-- Outer Wrapper Table -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #06080a; padding: 32px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0f141c; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 22px; overflow: hidden; box-shadow: 0 16px 48px rgba(0, 0, 0, 0.75);">
          
          <!-- ── TOP GLOW BAR ────────────────────────────────────── -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #a3e635 0%, #22d3ee 50%, #3b82f6 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- ── HEADER SECTION WITH DUAL LOGOS ──────────────────── -->
          <tr>
            <td style="padding: 36px 28px 24px 28px; text-align: center; background: linear-gradient(180deg, rgba(163, 230, 53, 0.08) 0%, rgba(34, 211, 238, 0.02) 60%, rgba(15, 20, 28, 0) 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.07);">
              <!-- Dual Logos -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin: 0 auto;">
                <tr>
                  <!-- AIML Club Logo -->
                  <td style="padding: 5px; background-color: #161e29; border: 2px solid rgba(163, 230, 53, 0.5); border-radius: 50%; box-shadow: 0 0 15px rgba(163, 230, 53, 0.2);">
                    <img src="https://social.aimlcluboct.in/aiml-club-logo.png" alt="AIML Club OCT Logo" width="66" height="66" style="display: block; border-radius: 50%;" />
                  </td>
                  <td style="padding: 0 14px; color: #475569; font-size: 22px; font-weight: 300;">•</td>
                  <!-- OCT College Logo -->
                  <td style="padding: 5px; background-color: #161e29; border: 2px solid rgba(34, 211, 238, 0.5); border-radius: 50%; box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);">
                    <img src="https://social.aimlcluboct.in/oct-logo.png" alt="Oriental College of Technology Logo" width="62" height="62" style="display: block; border-radius: 50%;" />
                  </td>
                </tr>
              </table>

              <h1 style="margin: 18px 0 4px 0; font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">
                AI &amp; Machine Learning Club
              </h1>
              <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">
                Oriental College of Technology, Bhopal
              </p>
              
              <!-- Tagline Pill -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin: 0 auto;">
                <tr>
                  <td style="background-color: rgba(163, 230, 53, 0.10); border: 1px solid rgba(163, 230, 53, 0.3); border-radius: 9999px; padding: 4px 14px; font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #a3e635;">
                    “Innovate • Implement • Inspire”
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── MAIN CONTENT BODY ──────────────────────────────────── -->
          <tr>
            <td style="padding: 30px 28px;">
              <!-- Subscription Confirmed Badge -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: rgba(34, 211, 238, 0.12); border: 1px solid rgba(34, 211, 238, 0.4); border-radius: 9999px; padding: 5px 16px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #22d3ee;">
                    ✓ Subscription Confirmed
                  </td>
                </tr>
              </table>

              <!-- Personalized Hero Title Box -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: rgba(255, 255, 255, 0.02); border-left: 4px solid #a3e635; border-radius: 0 12px 12px 0; padding: 16px 20px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 900; color: #ffffff; line-height: 1.3;">
                      Welcome aboard, <span style="color: #a3e635;">${displayName}</span>! 🚀
                    </h2>
                    <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #cbd5e1;">
                      You are officially subscribed to <strong>AIML Club OCT updates</strong>. You will now receive priority notifications about workshops, hackathons, open-source projects, and technical opportunities.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- WHAT TO EXPECT SECTION -->
              <p style="margin: 0 0 14px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8;">
                WHAT YOU CAN EXPECT AS A MEMBER:
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 26px; background-color: #141b24; border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 20px;">
                <tr>
                  <td>
                    <!-- Feature 1 -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 14px;">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width: 30px; height: 30px; border-radius: 8px; background-color: rgba(163, 230, 53, 0.15); border: 1px solid rgba(163, 230, 53, 0.3); text-align: center; line-height: 28px; font-size: 15px;">📢</div>
                        </td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong style="color: #ffffff;">Instant Notices &amp; Event Alerts:</strong> Direct updates on upcoming technical sessions, coding hackathons, and college events.
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 2 -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 14px;">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width: 30px; height: 30px; border-radius: 8px; background-color: rgba(34, 211, 238, 0.15); border: 1px solid rgba(34, 211, 238, 0.3); text-align: center; line-height: 28px; font-size: 15px;">🧠</div>
                        </td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong style="color: #ffffff;">Curated AI &amp; ML Resources:</strong> Access study roadmaps, GitHub repositories, free dataset kits, and project tutorials.
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 3 -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width: 30px; height: 30px; border-radius: 8px; background-color: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); text-align: center; line-height: 28px; font-size: 15px;">🎙️</div>
                        </td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong style="color: #ffffff;">Voice of AIML Club:</strong> Submit workshop requests, propose project ideas, and share feedback directly with club leads.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- PRIMARY ACTION BUTTONS -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                <tr>
                  <td align="center">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="padding-right: 10px; padding-bottom: 8px;">
                          <a href="https://social.aimlcluboct.in" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #a3e635 0%, #22d3ee 100%); color: #080a0c; font-size: 13px; font-weight: 900; text-decoration: none; padding: 14px 24px; border-radius: 12px; box-shadow: 0 4px 20px rgba(163, 230, 53, 0.28);">
                            Explore Digital Hub ↗
                          </a>
                        </td>
                        <td align="center" style="padding-bottom: 8px;">
                          <a href="https://chat.whatsapp.com/ITBTDOgerQVLnw9dq7jxN6?s=cl&p=a&ilr=0" target="_blank" style="display: inline-block; background-color: rgba(37, 211, 102, 0.12); border: 1.5px solid rgba(37, 211, 102, 0.45); color: #25D366; font-size: 13px; font-weight: 900; text-decoration: none; padding: 13px 22px; border-radius: 12px;">
                            Join WhatsApp Group ↗
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- ── ECOSYSTEM PORTALS GRID ─────────────────────────────── -->
              <p style="margin: 0 0 14px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; text-align: center;">
                EXPLORE AIML CLUB DIGITAL ECOSYSTEM:
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 26px;">
                <tr>
                  <!-- Portal 1 -->
                  <td width="50%" style="padding: 5px;">
                    <a href="https://aimlcluboct.in/events" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(34, 211, 238, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-bottom: 3px;">📅 Events &amp; Workshops</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">Hackathons, Talks &amp; Sessions</div>
                    </a>
                  </td>
                  <!-- Portal 2 -->
                  <td width="50%" style="padding: 5px;">
                    <a href="https://aimlcluboct.in/resources" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(59, 130, 246, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #3b82f6; margin-bottom: 3px;">📚 Resources Portal</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">Study Guides &amp; AI Roadmaps</div>
                    </a>
                  </td>
                </tr>
                <tr>
                  <!-- Portal 3 -->
                  <td width="50%" style="padding: 5px;">
                    <a href="https://voice.aimlcluboct.in" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(163, 230, 53, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #a3e635; margin-bottom: 3px;">🎙️ Voice Portal</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">Share Feedback &amp; Ideas</div>
                    </a>
                  </td>
                  <!-- Portal 4 -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://live.aimlcluboct.in" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(34, 211, 238, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-bottom: 3px;">📡 Live Broadcasts</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">Real-Time Updates Stream</div>
                    </a>
                  </td>
                </tr>
                <tr>
                  <!-- Portal 5 -->
                  <td width="50%" style="padding: 5px;">
                    <a href="https://aimlcluboct.in/team" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(132, 204, 22, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #84cc16; margin-bottom: 3px;">👥 Team &amp; Leads</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">Core Leaders &amp; Mentors</div>
                    </a>
                  </td>
                  <!-- Portal 6 -->
                  <td width="50%" style="padding: 5px;">
                    <a href="https://aimlcluboct.in/blog" target="_blank" style="display: block; background-color: #141b24; border: 1px solid rgba(249, 115, 22, 0.25); border-radius: 14px; padding: 14px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #f97316; margin-bottom: 3px;">📝 Tech Blog</div>
                      <div style="font-size: 11px; color: #94a3b8; line-height: 1.3;">AI Articles &amp; Insights</div>
                    </a>
                  </td>
                </tr>
              </table>

              <!-- ── SOCIAL MEDIA & NETWORKS ──────────────────────────────── -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #141b24; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 18px; margin-bottom: 10px;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8;">
                      CONNECT WITH US ACROSS NETWORKS:
                    </p>
                    <div style="font-size: 12px; line-height: 2.2;">
                      <a href="https://www.linkedin.com/company/aimlcluboct" target="_blank" style="color: #0A66C2; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(10, 102, 194, 0.12); border-radius: 6px; margin: 0 3px;">LinkedIn ↗</a>
                      <a href="https://github.com/aimlcluboct" target="_blank" style="color: #a3e635; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(163, 230, 53, 0.12); border-radius: 6px; margin: 0 3px;">GitHub ↗</a>
                      <a href="https://www.instagram.com/aimlcluboct" target="_blank" style="color: #E4405F; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(228, 64, 95, 0.12); border-radius: 6px; margin: 0 3px;">Instagram ↗</a>
                      <br>
                      <a href="https://whatsapp.com/channel/0029VbAthv38V0tfulumuV1D" target="_blank" style="color: #25D366; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(37, 211, 102, 0.12); border-radius: 6px; margin: 0 3px;">WhatsApp Channel ↗</a>
                      <a href="https://www.commudle.com/communities/ai-ml-club" target="_blank" style="color: #6366f1; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(99, 102, 241, 0.12); border-radius: 6px; margin: 0 3px;">Commudle ↗</a>
                      <a href="https://www.instagram.com/photopia_" target="_blank" style="color: #a855f7; font-weight: 700; text-decoration: none; padding: 3px 8px; background: rgba(168, 85, 247, 0.12); border-radius: 6px; margin: 0 3px;">Photopia ↗</a>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- ── SUBTLE BOTTOM LEADERSHIP CONTACT NOTE ────────────── -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 12px; padding: 12px 16px; margin-top: 14px;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 3px 0; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #64748b;">
                      STUDENT LEADERSHIP &amp; CONTACT DESK
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #cbd5e1; line-height: 1.5;">
                      <strong style="color: #e2e8f0;">Umesh Patel</strong> <span style="color: #94a3b8;">(Vice President)</span> &nbsp;•&nbsp; 
                      <a href="https://wa.me/917974389476" target="_blank" style="color: #22d3ee; text-decoration: none; font-weight: 600;">+91 79743 89476</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER SECTION ────────────────────────────────────────── -->
          <tr>
            <td style="padding: 26px 28px; text-align: center; background-color: #0b0f14; border-top: 1px solid rgba(255, 255, 255, 0.08);">
              <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 900; color: #ffffff;">
                AI &amp; Machine Learning Club
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #94a3b8;">
                Oriental College of Technology, Bhopal
              </p>
              
              <!-- Domain Links Bar -->
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #64748b;">
                Official Domains: 
                <a href="https://aimlcluboct.in" style="color: #a3e635; text-decoration: none; font-weight: 600;">aimlcluboct.in</a> | 
                <a href="https://social.aimlcluboct.in" style="color: #22d3ee; text-decoration: none; font-weight: 600;">social.aimlcluboct.in</a> | 
                <a href="https://live.aimlcluboct.in" style="color: #a3e635; text-decoration: none; font-weight: 600;">live.aimlcluboct.in</a>
              </p>

              <!-- Mandatory Legal & Contact Line -->
              <p style="margin: 0; font-size: 10px; color: #475569; line-height: 1.6;">
                You are receiving this email because you subscribed to updates at social.aimlcluboct.in.<br>
                Official Contact Address: <a href="mailto:info@aimlcluboct.in" style="color: #94a3b8; text-decoration: none;">info@aimlcluboct.in</a><br>
                © ${currentYear} AI &amp; Machine Learning Club OCT. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
