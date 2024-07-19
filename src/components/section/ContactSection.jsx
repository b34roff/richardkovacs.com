import { Attach } from "@/components/icones/Attach";
import { Discord } from "@/components/icones/Discord";
import { Email } from "@/components/icones/Email";
import { Github } from "@/components/icones/Github";
import { Linkedin } from "@/components/icones/Linkedin";
import { Twitter } from "@/components/icones/Twitter";
import { SecondaryButton } from "../buttons/SecondaryButton";

export const ContactSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full min-h-screen gap-16"
      id="contact">
      <h2 className="w-full text-2xl lg:text-3xl">
        {"->"} 3. <span className="font-bold">Contact</span> :
      </h2>
      <div className="flex flex-col items-center justify-between w-full h-full gap-4">
        <p>Feel free to contact me by email or through my social networks.</p>
        <div className="flex flex-wrap items-center w-full gap-4 justify-left md:justify-center">
          <SecondaryButton
            href="https://github.com/b34roff"
            icon={<Github />}
            label="Github"
          />
          <SecondaryButton
            href="https://twitter.com/b34r_rk"
            icon={<Twitter />}
            label="Twitter"
          />
          <SecondaryButton
            href="https://www.linkedin.com/in/richardkov/"
            icon={<Linkedin />}
            label="Linkedin"
          />
          <SecondaryButton
            href="mailto:hello@richardkovacs.fr"
            icon={<Email />}
            label="hello@richardkovacs.fr"
          />
          <SecondaryButton href="" icon={<Discord />} label="Discord" />
          <SecondaryButton
            download
            href="/CV_KOVACS_Richard_DEV.pdf"
            icon={<Attach />}
            label="Resume"
          />
        </div>
      </div>
    </section>
  );
};
