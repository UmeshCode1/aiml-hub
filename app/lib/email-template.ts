/**
 * AIML Club OCT — Master HTML Welcome Email Template
 * HTML & Inline CSS formatted for 100% universal email client rendering (Gmail, Outlook, Apple Mail, Yahoo)
 */

export function getWelcomeEmailHtml(recipientEmail?: string, recipientName?: string): string {
  const displayName = recipientName?.trim() || recipientEmail?.trim() || "Student / Member";
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AIML Club OCT</title>
</head>
<body style="margin: 0; padding: 0; background-color: #080a0c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc; -webkit-font-smoothing: antialiased;">
  <!-- Main Background Table -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #080a0c; padding: 30px 12px;">
    <tr>
      <td align="center">
        <!-- Main Email Container Box -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #12161a; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
          
          <!-- ── BRAND HEADER WITH DUAL LOGOS ───────────────────────── -->
          <tr>
            <td style="padding: 35px 25px 25px 25px; text-align: center; background: linear-gradient(180deg, rgba(163, 230, 53, 0.09) 0%, rgba(34, 211, 238, 0.03) 60%, rgba(18, 22, 26, 0) 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <!-- Logos Row -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin: 0 auto;">
                <tr>
                  <!-- AIML Club Logo -->
                  <td style="padding: 6px; background-color: #181d23; border: 1.5px solid rgba(163, 230, 53, 0.4); border-radius: 50%;">
                    <img src="https://social.aimlcluboct.in/aiml-club-logo.png" alt="AIML Club OCT Logo" width="64" height="64" style="display: block; border-radius: 50%;" />
                  </td>
                  <td style="padding: 0 12px; color: #475569; font-size: 20px;">•</td>
                  <!-- OCT College Logo -->
                  <td style="padding: 6px; background-color: #181d23; border: 1.5px solid rgba(34, 211, 238, 0.4); border-radius: 50%;">
                    <img src="https://social.aimlcluboct.in/oct-logo.png" alt="Oriental College of Technology Logo" width="60" height="60" style="display: block; border-radius: 50%;" />
                  </td>
                </tr>
              </table>

              <h1 style="margin: 18px 0 4px 0; font-size: 23px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                AI &amp; Machine Learning Club
              </h1>
              <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">
                Oriental College of Technology, Bhopal
              </p>
              <p style="margin: 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #a3e635;">
                “Innovate • Implement • Inspire”
              </p>
            </td>
          </tr>

          <!-- ── MAIN CONTENT BODY ──────────────────────────────────── -->
          <tr>
            <td style="padding: 28px 25px;">
              <!-- Subscription Confirmed Badge -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="background-color: rgba(163, 230, 53, 0.12); border: 1px solid rgba(163, 230, 53, 0.35); border-radius: 9999px; padding: 5px 15px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #a3e635;">
                    ✓ Subscription Confirmed
                  </td>
                </tr>
              </table>

              <h2 style="margin: 0 0 12px 0; font-size: 23px; font-weight: 900; color: #ffffff; line-height: 1.25;">
                Welcome to the AIML Club OCT Ecosystem! 🚀
              </h2>
              
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #cbd5e1;">
                Hello <strong style="color: #a3e635;">${displayName}</strong>, you are officially subscribed to <strong>AIML Club OCT updates</strong>. You'll be the first to receive important notices, workshop announcements, hackathon alerts, project roadmaps, and tech articles.
              </p>

              <!-- WHAT TO EXPECT BOX -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 18px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #a3e635;">
                      WHAT TO EXPECT AS A MEMBER:
                    </p>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                      <tr>
                        <td width="28" valign="top" style="font-size: 16px;">📢</td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Fast Notices &amp; Event Alerts:</strong> Instant updates on upcoming workshops, sessions, and competitions.
                        </td>
                      </tr>
                    </table>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                      <tr>
                        <td width="28" valign="top" style="font-size: 16px;">🧠</td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Curated AI &amp; ML Resources:</strong> Access open-source code repositories, study guides, and project kits.
                        </td>
                      </tr>
                    </table>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="28" valign="top" style="font-size: 16px;">🎙️</td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Your Voice Matters:</strong> Direct channel to share project ideas, workshop requests, and feedback with club leads.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- PRIMARY ACTION BUTTONS -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 28px;">
                <tr>
                  <td align="center">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="padding-right: 8px;">
                          <a href="https://social.aimlcluboct.in" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #a3e635 0%, #22d3ee 100%); color: #080a0c; font-size: 13px; font-weight: 900; text-decoration: none; padding: 13px 22px; border-radius: 12px; box-shadow: 0 4px 18px rgba(163, 230, 53, 0.25);">
                            Explore Digital Hub ↗
                          </a>
                        </td>
                        <td align="center">
                          <a href="https://chat.whatsapp.com/ITBTDOgerQVLnw9dq7jxN6?s=cl&p=a&ilr=0" target="_blank" style="display: inline-block; background-color: rgba(37, 211, 102, 0.15); border: 1.5px solid rgba(37, 211, 102, 0.4); color: #25D366; font-size: 13px; font-weight: 900; text-decoration: none; padding: 12px 20px; border-radius: 12px;">
                            Join WhatsApp Group ↗
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- ── IMPORTANT ECOSYSTEM PORTALS GRID ───────────────────── -->
              <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; text-align: center;">
                OFFICIAL ECOSYSTEM PORTALS:
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                <tr>
                  <!-- Portal 1: Events & Workshops -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://aimlcluboct.in/events" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-bottom: 2px;">📅 Events &amp; Workshops</div>
                      <div style="font-size: 11px; color: #94a3b8;">Hackathons, Talks &amp; Sessions</div>
                    </a>
                  </td>
                  <!-- Portal 2: Resources -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://aimlcluboct.in/resources" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #3b82f6; margin-bottom: 2px;">📚 Resources Portal</div>
                      <div style="font-size: 11px; color: #94a3b8;">Study Guides &amp; AI Roadmaps</div>
                    </a>
                  </td>
                </tr>
                <tr>
                  <!-- Portal 3: Voice Portal -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://voice.aimlcluboct.in" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #a3e635; margin-bottom: 2px;">🎙️ Voice Portal</div>
                      <div style="font-size: 11px; color: #94a3b8;">Share Feedback &amp; Ideas</div>
                    </a>
                  </td>
                  <!-- Portal 4: Live Updates -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://live.aimlcluboct.in" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #22d3ee; margin-bottom: 2px;">📡 Live Updates</div>
                      <div style="font-size: 11px; color: #94a3b8;">Real-Time Broadcasts</div>
                    </a>
                  </td>
                </tr>
                <tr>
                  <!-- Portal 5: Our Team -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://aimlcluboct.in/team" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #84cc16; margin-bottom: 2px;">👥 Team &amp; Leads</div>
                      <div style="font-size: 11px; color: #94a3b8;">Core Leaders &amp; Mentors</div>
                    </a>
                  </td>
                  <!-- Portal 6: Blog Articles -->
                  <td width="50%" style="padding: 4px;">
                    <a href="https://aimlcluboct.in/blog" target="_blank" style="display: block; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 12px; text-decoration: none;">
                      <div style="font-size: 13px; font-weight: 800; color: #f97316; margin-bottom: 2px;">📝 Blog Articles</div>
                      <div style="font-size: 11px; color: #94a3b8;">AI Articles &amp; Insights</div>
                    </a>
                  </td>
                </tr>
              </table>

              <!-- ── SOCIAL MEDIA & NETWORKS ──────────────────────────────── -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; padding: 16px; margin-bottom: 10px;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 10px 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8;">
                      CONNECT WITH US ACROSS NETWORKS:
                    </p>
                    <div style="font-size: 12px; line-height: 2;">
                      <a href="https://www.linkedin.com/company/aimlcluboct" target="_blank" style="color: #0A66C2; font-weight: 700; text-decoration: none; margin: 0 8px;">LinkedIn ↗</a>
                      •
                      <a href="https://github.com/aimlcluboct" target="_blank" style="color: #a3e635; font-weight: 700; text-decoration: none; margin: 0 8px;">GitHub ↗</a>
                      •
                      <a href="https://www.instagram.com/aimlcluboct" target="_blank" style="color: #E4405F; font-weight: 700; text-decoration: none; margin: 0 8px;">Instagram ↗</a>
                      <br>
                      <a href="https://whatsapp.com/channel/0029VbAthv38V0tfulumuV1D" target="_blank" style="color: #25D366; font-weight: 700; text-decoration: none; margin: 0 8px;">WhatsApp Channel ↗</a>
                      •
                      <a href="https://www.commudle.com/communities/ai-ml-club" target="_blank" style="color: #6366f1; font-weight: 700; text-decoration: none; margin: 0 8px;">Commudle ↗</a>
                      •
                      <a href="https://www.instagram.com/photopia_" target="_blank" style="color: #a855f7; font-weight: 700; text-decoration: none; margin: 0 8px;">Photopia ↗</a>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ────────────────────────────────────────────────── -->
          <tr>
            <td style="padding: 24px 25px; text-align: center; background-color: #0c0f13; border-top: 1px solid rgba(255, 255, 255, 0.08);">
              <p style="margin: 0 0 4px 0; font-size: 13px; font-weight: 800; color: #ffffff;">
                AI &amp; Machine Learning Club
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #94a3b8;">
                Oriental College of Technology, Bhopal
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #64748b;">
                Official Portals: 
                <a href="https://aimlcluboct.in" style="color: #a3e635; text-decoration: none; font-weight: 600;">aimlcluboct.in</a> | 
                <a href="https://social.aimlcluboct.in" style="color: #22d3ee; text-decoration: none; font-weight: 600;">social.aimlcluboct.in</a> | 
                <a href="https://live.aimlcluboct.in" style="color: #a3e635; text-decoration: none; font-weight: 600;">live.aimlcluboct.in</a>
              </p>
              <p style="margin: 0; font-size: 10px; color: #475569; line-height: 1.5;">
                You are receiving this email because you subscribed to updates at social.aimlcluboct.in.<br>
                Official Contact Email: <a href="mailto:aimlcluboct@gmail.com" style="color: #94a3b8; text-decoration: none;">aimlcluboct@gmail.com</a><br>
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
