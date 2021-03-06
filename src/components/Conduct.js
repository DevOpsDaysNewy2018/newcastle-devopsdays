import React from "react";
import Link from "gatsby-link";

import logo from "../assets/images/DevOpsNewy_WHITE_TALL.png";

const Conduct = () => (
  <section id="conduct">
    <div className="row">
      <div className="three columns">
        <img src={logo} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>DevOpsDays Newcastle 2018 - Code of Conduct</h2>

        <h3 id="anti-harassment-policy">ANTI-HARASSMENT POLICY</h3>
        <p>Report a breach of code of conduct <Link to='report-conduct'>here</Link></p>

        <p>
          Devopsdays is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation,
          disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form.
          Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules
          may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.
        </p>
        <p>
          Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race,
          religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing
          behavior are expected to comply immediately.</p><p>Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also
          subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff
          (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
        </p>
        <p>
          If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the
          offender or expulsion from the conference with no refund.
        </p>
        <p>
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference
          staff immediately.
        </p>
        <p>
          Conference staff can be identified by distinct staff badges. Conference staff will be happy to help participants contact hotel/venue security
          or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference.
          We value your attendance.
        </p>
        <p>
          We expect participants to adhere to the code of conduct at all conference venues and conference-related social events.
        </p>

        <h3 id="code-of-conduct">CODE OF CONDUCT</h3>

        <p>
          I. I am an attendee at devopsdays, learning from and sharing with other devopsdays attendees in an effort to better myself and my industry.
          I co-create the experience with fellow attendees. I am prepared to give my energy, presence and sensitivity to creating the best possible
          experience for myself and others.</p>
        <p>
          II. I am coming to devopsdays to interact with people. I understand that imagery and language which is suggestive or derogatory will offend
          and make people uncomfortable. I also understand that people may have boundaries and sensibilities different from my own. I will accept without
          question when informed that something is offensive or unacceptable in the context of the devopsdays event.
        </p>

        <p>
          III. I will never intentionally harass or offend another attendee regardless of gender, sexual orientation, disability, appearance, size, race
          or religion and will not abide another attendee being harassed or offended. If I am aware that anyone is uncomfortable or unsafe, I will notify
          those giving offense and the devopsdays event organizers.
        </p>
        <p>
          IV. If I am offended or harassed, I will inform people around me who make me feel safe and the event organizers. If I feel safe, at my discretion,
          I will inform those giving offense of the specific actions with the hope that the other party is well-intentioned and ignorant, but I am under no
          obligation to do so.
        </p>
        <p>
          V. I understand that people are different and I attempt to be forgiving of others actions at the level of their sincere intent, but my priority is
          protecting my safety and the safety of others. I will act without hesitation or reservation until there are no question of the safety of all parties.
        </p>
        <p>
          VI. I trust the devopsdays organizers and attendees will co-create the best possible experience for everyone involved, as I will. I believe devopsdays
          is about empowering people and I will not forget I am empowered to create a safe and nurturing environment. If I or any other attendee violates this
          aspect of the event, I expect the conference organizers to protect the attendees by direct action, including expelling those in violation and contacting
          the proper authorities.
        </p>
      </div>
    </div>
  </section>
);

export default Conduct;
