/**
 * AIML Club OCT — Ultra-Premium Welcome Email Template
 * HTML & Inline CSS formatted for universal email client compatibility (Gmail, Outlook, Apple Mail)
 */

export function getWelcomeEmailHtml(recipientEmail?: string): string {
  const displayEmail = recipientEmail || "Student / Member";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to AIML Club OCT</title>
</head>
<body style="margin: 0; padding: 0; background-color: #080a0c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc; -webkit-font-smoothing: antialiased;">
  <!-- Main Background Table -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #080a0c; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Container Box -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #12161a; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 35px 30px 25px 30px; text-align: center; background: linear-gradient(180deg, rgba(163, 230, 53, 0.08) 0%, rgba(18, 22, 26, 0) 100%); border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
              <!-- Logo Container -->
              <table border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 8px; background-color: #181d23; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 50%;">
                    <img src="https://social.aimlcluboct.in/aiml-club-logo.png" alt="AIML Club OCT Logo" width="68" height="68" style="display: block; border-radius: 50%;" />
                  </td>
                </tr>
              </table>
              <h1 style="margin: 16px 0 4px 0; font-size: 22px; font-weight: 900; color: #f8fafc; letter-spacing: -0.5px;">
                AI &amp; Machine Learning Club
              </h1>
              <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 600; color: #94a3b8;">
                Oriental College of Technology, Bhopal
              </p>
              <p style="margin: 0; font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #a3e635;">
                “Innovate • Implement • Inspire”
              </p>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 30px;">
              <!-- Welcome Badge -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="background-color: rgba(163, 230, 53, 0.12); border: 1px solid rgba(163, 230, 53, 0.3); border-radius: 9999px; padding: 4px 14px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #a3e635;">
                    ✓ Subscription Confirmed
                  </td>
                </tr>
              </table>

              <h2 style="margin: 0 0 12px 0; font-size: 24px; font-weight: 900; color: #ffffff; line-height: 1.25;">
                Welcome to the AIML Club OCT Ecosystem! 🚀
              </h2>
              
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #cbd5e1;">
                Hello <strong style="color: #a3e635;">${displayEmail}</strong>, you are officially subscribed to <strong>AIML Club OCT updates</strong>. You'll be the first to know about upcoming hackathons, AI/ML workshops, open-source projects, tech blogs, and official club announcements.
              </p>

              <!-- Feature Highlights Box -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 18px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8;">
                      WHAT TO EXPECT:
                    </p>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                      <tr>
                        <td width="28" valign="top" style="font-size: 16px;">📢</td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Fast Notices &amp; Announcements:</strong> Instant updates on upcoming sessions, competitions, and college events.
                        </td>
                      </tr>
                    </table>

                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 10px;">
                      <tr>
                        <td width="28" valign="top" style="font-size: 16px;">🧠</td>
                        <td style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Curated AI &amp; ML Resources:</strong> Study roadmaps, GitHub repos, dataset links, and hands-on tutorials.
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

              <!-- Call to Action Buttons -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                <tr>
                  <td align="center">
                    <a href="https://social.aimlcluboct.in" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #a3e635 0%, #22d3ee 100%); color: #080a0c; font-size: 14px; font-weight: 900; text-decoration: none; padding: 14px 28px; border-radius: 12px; box-shadow: 0 4px 20px rgba(163, 230, 53, 0.25);">
                      Explore AIML Digital Hub ↗
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Quick Links Bar -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.02); border-radius: 12px; padding: 14px;">
                <tr>
                  <td align="center" style="font-size: 12px; color: #94a3b8;">
                    <a href="https://chat.whatsapp.com/ITBTDOgerQVLnw9dq7jxN6?s=cl&p=a&ilr=0" target="_blank" style="color: #25D366; font-weight: 700; text-decoration: none; margin: 0 8px;">WhatsApp Group ↗</a>
                    •
                    <a href="https://whatsapp.com/channel/0029VbAthv38V0tfulumuV1D" target="_blank" style="color: #25D366; font-weight: 700; text-decoration: none; margin: 0 8px;">WhatsApp Channel ↗</a>
                    •
                    <a href="https://voice.aimlcluboct.in" target="_blank" style="color: #a3e635; font-weight: 700; text-decoration: none; margin: 0 8px;">Voice Portal ↗</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; text-align: center; background-color: #0c0f13; border-top: 1px solid rgba(255, 255, 255, 0.06);">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #cbd5e1;">
                AI &amp; Machine Learning Club
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #64748b;">
                Oriental College of Technology, Bhopal
              </p>
              <p style="margin: 0 0 8px 0; font-size: 11px; color: #475569;">
                Official Portals: <a href="https://aimlcluboct.in" style="color: #94a3b8; text-decoration: underline;">aimlcluboct.in</a> | <a href="https://social.aimlcluboct.in" style="color: #94a3b8; text-decoration: underline;">social.aimlcluboct.in</a> | <a href="https://live.aimlcluboct.in" style="color: #94a3b8; text-decoration: underline;">live.aimlcluboct.in</a>
              </p>
              <p style="margin: 0; font-size: 10px; color: #334155; line-height: 1.5;">
                You are receiving this email because you subscribed to updates at social.aimlcluboct.in.<br>
                © ${new Date().getFullYear()} AI &amp; Machine Learning Club OCT. All rights reserved.
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
