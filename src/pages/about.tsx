import React from "react";
import Layout from "../components/layout";
import { RouteComponentProps } from "@reach/router";
import Section from "../styles/css/containers";
import Panel from "../components/panel";
import Button from "../components/widgets/button";

const AboutPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="About" gaCategory="About" backgroundColor="#F8F8F8">
      <Section widthType="text">
        <Panel header="What is MayronUI?">
          <p>
            MayronUI (commonly abbreviated to MUI) is a graphical user interface
            alternative for Blizzard Entertainment’s popular World of Warcraft (WoW)
            MMORPG. More specifically, it is an addon pack consisting of three core
            MUI-specific addons (
            <Button type="text" href="https://www.curseforge.com/wow/addons/mui_core">
              MUI_Core
            </Button>
            ,{" "}
            <Button type="text" href="https://www.curseforge.com/wow/addons/mui_setup">
              MUI_Setup
            </Button>
            , and{" "}
            <Button type="text" href="https://www.curseforge.com/wow/addons/mui_config">
              MUI_Config
            </Button>
            ) as well as several others developed by other addon authors that can be
            swapped out if the user chooses to do so. The core MUI addons contain most of
            the functionality that power the UI. These are also hosted on curseforge and
            can be updated via the{" "}
            <Button type="text" href="https://www.twitch.tv/downloads">
              Twitch client
            </Button>
            . The user only needs to install the UI pack once following the instructions
            on the{" "}
            <Button type="text" href="/p/mayronui">
              download page
            </Button>{" "}
            and should then rely on the Twitch client to automatically update each
            individual addon going forward. The UI supports all screen resolution types
            and is suitable for all types of gameplay.
          </p>
        </Panel>
        <Panel header="A Brief History of MayronUI">
          <p>
            MUI has gone through many major releases since its first release on
            WoWInterface on April 14th, 2011. These major releases are referred to as
            generations, or “Gens” for short, however, this naming convention may be
            coming to an end soon. The first release of MUI was simply called MayronUI.
            There were no core MUI addons as everything was controlled by KgPanel scripts.
            Then, on December 23rd, 2012, MayronUI Gen2 was born. This came with major UI
            artwork redesigns, an official MUI installer (now known as MUI_Setup), which
            injected addon settings into a “saved variable” to override default addon
            settings and to persist those changes between client restarts. The most
            notable change introduced in Gen2 was the removal of KgPanels from the UI
            pack.
          </p>
          <p>
            As more major iterations were released, more addons written by other addon
            authors were replaced with MUI modules. All modules are contained and
            controlled by the MUI “engine” that powers the UI under the hood.{" "}
            <Button type="text" href="/p/mayron-objects">
              MayronObjects
            </Button>{" "}
            and{" "}
            <Button type="text" href="/p/lib-mayron-db">
              LibMayronDB
            </Button>{" "}
            are two powerful libraries with low memory footprints that were created as
            part of the MUI engine but were later refactored and extracted as Lua
            libraries for general use. LibMayronObjects provides the module system for MUI
            while LibMayronDB provides the embedded database and a concept called “update
            functions” to provide a streamlined approach for automatically updating the UI
            when the state of the database changes.
          </p>
          <p>
            In addition to these libraries, two other large chunks of code were extracted
            out of the MUI engine and refactored for general use:{" "}
            <Button type="text" href="/p/pkg-grid-panels">
              Pkg-GridPanels
            </Button>{" "}
            and{" "}
            <Button type="text" href="/p/lib-mayron-events">
              LibMayronEvents
            </Button>
            . Pkg-GridPanels originated from the old LibMayronGUI library. This library is
            still being used in MUI to provide many utility functions to create widgets
            and menus. The grid system for providing responsive UI panels was extracted
            and bundled into what eventually became Pkg-GridPanels. Finally,{" "}
            <Button type="text" href="/p/lib-mayron-events">
              LibMayronEvents
            </Button>{" "}
            provides an event management system for creating, destroying, enabling, and
            disabling event handlers, and many other quality of life features.
          </p>
        </Panel>
        <Panel header="Who is Mayron?">
          <p>
            Mayron is the single developer behind MayronUI, LibMayronDB, LibMayronObjects,
            Pkg-GridPanels, and LibMayronEvents, and offers many Lua programming lessons
            hosted on his{" "}
            <Button
              type="text"
              href="https://www.youtube.com/channel/UCCu-NuBYVi7yokZmKBCBvHw"
            >
              YouTube channel
            </Button>
            , as well as private tutoring. He also actively contributes to the WoW addon
            development community in anyway he can. On July 29th, 2018, Mayron created the{" "}
            <Button type="text" href="https://discord.gg/8Kh3maU">
              MUI Discord community
            </Button>{" "}
            where members discuss and help each other with addon development, Lua
            programming, MUI, and more. Eventually, two members known in the community as
            Monster and Monkey, were promoted as moderators to help with the large growth
            of new members. At the time of writing this (October 18th, 2020), the server
            currently has over 1,300 members roughly averaging between 150-250 active
            users online at any given time. Mayron also streams from time to time on{" "}
            <Button type="text" href="https://www.twitch.tv/mayronwow">
              Twitch
            </Button>
            .
          </p>
        </Panel>
        <Panel header="The person behind the Mayron avatar">
          <p>
            Hello, and thank you for reading up to this point! My real name is Mike
            Richards and Mayron is my main character’s name in WoW. I am a software
            developer/engineer living in the UK with a fulltime job in the industry whilst
            also finding the time to work on several personal side projects. I graduated
            from the University of Essex in 2016 with a first-class BSc in Computer
            Science and again in 2020 from the University of Manchester with a first-class
            MSc in Advanced Computer Science. I also studied an interactive media course
            before going to university, which allowed me to develop and express my
            artistic and graphic design skills. I would accept small internship positions
            to build websites for small businesses and later used these skills to build
            this website and, of course, MUI.
          </p>
          <p>
            I have been playing the game since the release of The Burning Crusade
            expansion after seeing my brother play through the Vanilla experience. I would
            have started sooner but at that time of my life I was obsessed with The Elder
            Scrolls: Oblivion. I started my WoW addon development journey with simple
            scripts I wrote for enhancing the interactivity of panels created using the
            popular{" "}
            <Button type="text" href="https://www.curseforge.com/wow/addons/kg-panels">
              KgPanels
            </Button>{" "}
            addon, which allows you to display visual frames on the screen. During this
            time, I didn&#39;t know anything about programming or what Lua was - I was
            still studying interactive media between 2011 and 2012 and slowly became
            obsessed with UI/UX and the WoW UI enthusiast community. In terms of the
            programming side of addon development, all I knew is that you could add “code
            snippets” to things called events that were somehow attached to frames I
            created in KgPanels, such as the OnLoad and OnClick events. I would constantly
            post questions on mmo-champion where a user by the name of Treeston (who sadly
            no longer exists) would help me from time to time with any questions I asked.
            I am forever grateful for his help and this inspired me to eventually give
            back to the community by one day feeling confiedent enough to share my own
            knowledge many years later. KgPanels was, and still is in my opinion, one of
            the best ways to get into addon development if you don’t know anything about
            programming, as it gives you access (albeit restrictive access) to parts of
            the WoW client-side API and you can later do more advanced things using Lua
            scripting when you naturally become curious to learn.
          </p>
          <p>
            Thank you for following along with my story through addon development and the
            work that I put out to our wonderful community. It means a great deal to me
            everytime I see that same passion shine through other beginner programmers
            following a similar path as me through addon development. If you&#39;re not a
            programmer but love using my UI, or are following my other side projects and
            are a fan, thank you very much for your support.
          </p>
          <p>
            Have a great day!
            <br />
            Mike Richards (a.k.a. Mayron)
          </p>
        </Panel>
        <footer>
          <p>For all business enquiries please email mayron.wow@gmail.com.</p>
          <p>
            You can also visit my{" "}
            <Button
              type="text"
              href="https://www.linkedin.com/in/michael-john-richards/"
              ga={{ action: "LinkedIn" }}
            >
              LinkedIn profile
            </Button>{" "}
            for additional details.
          </p>
        </footer>
      </Section>
    </Layout>
  );
};

export default AboutPage;
