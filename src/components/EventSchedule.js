import React, { Component } from "react";
import MediaQuery from "react-responsive";
import moment from "moment-timezone";
import { css } from "glamor";

import EventScheduleCompressedTable from "./EventScheduleCompressedTable";
import EventScheduleFullSizeTable from "./EventScheduleFullSizeTable";
import ContentWrapper from "./ContentWrapper";
import DaySwitcher from "./DaySwitcher";

moment.tz.setDefault("America/Kingston");

// duration in minutes, startDate as ISO 8601
const schedule = [
  {
    startDate: "2019-02-01T17:30:00",
    eventName: "Busses arrive",
    location: "Kingston Hall"
  },
  {
    startDate: "2019-02-01T17:30:00",
    endDate: "2019-02-01T19:00:00",
    eventName: "Registration & Dinner | Ali Baba",
    subtitle: "Sponsored by Tucows",
    location: "Kingston Hall Rm 200, 201, 204, 205, 213"
  },
  {
    startDate: "2019-02-01T19:30:00",
    endDate: "2019-02-01T21:30:00",
    eventName: "Opening Ceremonies",
    location: "Grant Hall"
  },
  {
    startDate: "2019-02-01T21:45:00",
    endDate: "2019-02-01T22:30:00",
    eventName: "Team Formation & Setup",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-01T22:00:00",
    eventName: "Hacking Begins!",
    location: "LinQ Lab and Engineering Active Learning Rooms - Mitchell Hall"
  },
  {
    startDate: "2019-02-01T23:00:00",
    endDate: "2019-02-01T23:45:00",
    eventName: "Workshop | Please Build Things It's Good For You",
    subtitle: "Ivan Zhang",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T00:00:00",
    eventName: "Hardware Lab Opens",
    location: "Breakpoint Lounge"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T00:45:00",
    eventName: "Workshop | DCL Workshop",
    subtitle: "Distributed Compute Labs",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T00:00:00",
    endDate: "2019-02-02T01:30:00",
    eventName: "Midnight Snack | Bubble Tea",
    subtitle: "Sponsored by Sun Life Financial",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T01:00:00",
    endDate: "2019-02-02T01:45:00",
    eventName: "Workshop | Introduction to React.js",
    subtitle: "Ese Okonofua",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T02:00:00",
    endDate: "2019-02-02T02:45:00",
    eventName: "Workshop | Building ML Models with PyTorch",
    subtitle: "Nicole Fitzgerald",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T03:00:00",
    endDate: "2019-02-02T03:45:00",
    eventName: "Workshop | Introduction to GraphQL",
    subtitle: "QHacks Tech Team",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T07:00:00",
    endDate: "2019-02-02T07:45:00",
    eventName: "Workshop | Creative Design for Software Development",
    subtitle: "TD Bank",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T08:00:00",
    endDate: "2019-02-02T08:45:00",
    eventName: "Workshop | For the Love of Robots",
    subtitle: "Orange Gate Consulting",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T08:00:00",
    endDate: "2019-02-02T09:30:00",
    eventName: "Breakfast | Breakfast Sandwiches and Pastries",
    subtitle: "Sponsored by Distributed Compute Labs",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T09:00:00",
    endDate: "2019-02-02T09:45:00",
    eventName: "Workshop | Slaying Your Next Technical Interview",
    subtitle: "Scotiabank",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T10:00:00",
    endDate: "2019-02-02T11:00:00",
    eventName: "Mini-Event | !Light",
    subtitle: "Sponsored by Sunlife Financial and Distributed Compute Labs",
    location: "Mitchell Hall 126"
  },
  {
    startDate: "2019-02-02T10:00:00",
    endDate: "2019-02-02T10:45:00",
    eventName: "Workshop | How Not to Get Screwed by a VC",
    subtitle: "iGan Partners",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T11:00:00",
    endDate: "2019-02-02T11:45:00",
    eventName: "Workshop | Getting Started With Bitmoji & Login Kit",
    subtitle: "Snap Inc.",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T12:00:00",
    endDate: "2019-02-02T12:45:00",
    eventName: "Lunch | Pita Pit",
    subtitle: "Sponsored by Snap Inc.",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T13:00:00",
    endDate: "2019-02-02T13:45:00",
    eventName: "Workshop | Tackling the Basics of Apache Kafka",
    subtitle: "Tucows",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T14:00:00",
    endDate: "2019-02-02T14:45:00",
    eventName: "Workshop | Data Science and Artificial Intelligence in Banking",
    subtitle: "National Bank Financial",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T14:00:00",
    endDate: "2019-02-02T15:00:00",
    eventName: "Mini Event | Resume Roast",
    subtitle: "Sponsored by Tucows",
    location: "Mitchell Hall 126"
  },
  {
    startDate: "2019-02-02T15:00:00",
    endDate: "2019-02-02T15:45:00",
    eventName: "Workshop | Growing Marketplace Products",
    subtitle: "Khalid Karim",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T16:00:00",
    endDate: "2019-02-02T16:45:00",
    eventName: "Mini Event | Dog Therapy",
    subtitle: "Sponsored by iGan Partners and National Bank Financial",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T16:00:00",
    endDate: "2019-02-02T16:45:00",
    eventName: "Workshop | Pitch Perfect",
    subtitle: "Sun Life Financial",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T17:00:00",
    endDate: "2019-02-02T17:45:00",
    eventName: "Workshop | Seeking Seed Investors for Your Startup",
    subtitle: "Pablo from Bountey",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T18:00:00",
    endDate: "2019-02-02T19:00:00",
    eventName: "Dinner | Taj Curry House",
    subtitle: "Sponsored by Standard Library",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T18:00:00",
    endDate: "2019-02-02T19:00:00",
    eventName: "Mini-Event | Mike the Magician",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T19:00:00",
    endDate: "2019-02-02T19:45:00",
    eventName: "Workshop | Building APIs with Standard Library",
    subtitle: "Standard Library",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T20:00:00",
    endDate: "2019-02-02T20:45:00",
    eventName: "Workshop | Mental Health",
    subtitle: "Mental Health | Step Above Stigma",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T20:00:00",
    endDate: "2019-02-02T21:00:00",
    eventName: "Mini-Event | VR",
    subtitle: "Sponsored by Standard Libray",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-02T21:00:00",
    endDate: "2019-02-02T21:45:00",
    eventName: "Workshop | DialogFlow",
    subtitle: "AMS, ASUS, and EngSoc IT teams",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T22:00:00",
    endDate: "2019-02-02T22:45:00",
    eventName: "Workshop | Introduction to Solidity",
    subtitle: "ConsenSys",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T23:00:00",
    endDate: "2019-02-02T23:45:00",
    eventName: "Workshop | WTF is Blockchain and Why Does it Matter?",
    subtitle: "Layne Lafrance",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-02T23:00:00",
    endDate: "2019-02-03T00:00:00",
    eventName: "Mini Event | Cup Stacking",
    subtitle: "Sponsored by MLH",
    location: "Mitchell Atrium"
  },
  {
    startDate: "2019-02-03T00:00:00",
    endDate: "2019-02-03T01:30:00",
    eventName: "Midnight Snack | Bakery Treats",
    subtitle: "National Bank Financial",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-03T00:00:00",
    endDate: "2019-02-03T00:45:00",
    eventName: "Workshop | Product Development Process - Interactive Workshop",
    subtitle: "Ritual",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-03T01:00:00",
    endDate: "2019-02-03T01:45:00",
    eventName: "Workshop | Introduction to Three.js",
    subtitle: "Mosaic",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-03T02:00:00",
    endDate: "2019-02-03T02:45:00",
    eventName: "Workshop | Introduction to Netlify",
    subtitle: "Zach Harley",
    location: "DDQIC Event Commons"
  },
  {
    startDate: "2019-02-03T08:00:00",
    endDate: "2019-02-03T10:00:00",
    eventName: "Breakfast | Fruit and Pastries",
    subtitle: "Sponsored by iGan Partners",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-03T09:00:00",
    eventName: "Hacking Ends!"
  },
  {
    startDate: "2019-02-03T09:30:00",
    endDate: "2019-02-03T11:30:00",
    eventName: "Judging",
    location: "Engineering Active Learning Rooms"
  },
  {
    startDate: "2019-02-03T11:00:00",
    endDate: "2019-02-03T12:00:00",
    eventName: "Lunch | Pizza",
    subtitle: "Sponsored by Tucows and Standard Library",
    location: "Bartlett Gym"
  },
  {
    startDate: "2019-02-03T12:30:00",
    endDate: "2019-02-03T14:30:00",
    eventName: "Closing Ceremonies",
    location: "Grant Hall"
  },
  {
    startDate: "2019-02-03T15:00:00",
    eventName: "Busses Leave",
    location: "Grant Hall"
  }
];

const eventDays = [];

for (const event of schedule) {
  const start = moment(event.startDate).format("YYYY-MM-DD");
  if (!eventDays.includes(start)) {
    eventDays.push(start);
  }
}

eventDays.sort((a, b) => {
  return (
    moment(a, "YYYY-MM-DD").format("X") - moment(b, "YYYY-MM-DD").format("X")
  );
});

class EventSchedule extends Component {
  state = {
    selectedDay: eventDays[0]
  };

  addDurations(events) {
    return events.map((item) => {
      if (!item.endDate) {
        return item;
      }
      let duration = moment(item.endDate).diff(item.startDate, "minutes", true);
      if (duration > 59) {
        duration = Math.round((duration / 60) * 100) / 100;
        item.duration = `${duration} hr`;
      } else {
        item.duration = `${duration} min`;
      }
      return duration !== 1 ? { ...item, duration: `${item.duration}s` } : item;
    });
  }

  changeDay(selectedDay) {
    this.setState({ selectedDay });
  }

  render() {
    const eventsOnSelectedDay = schedule.filter(
      (item) =>
        (moment(item.startDate).format("YYYY-MM-DD") ===
          this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) > 5) ||
        (moment(item.startDate)
          .subtract("days", 1)
          .format("YYYY-MM-DD") === this.state.selectedDay &&
          Number(moment(item.startDate).format("H")) <= 5)
    );

    const data = this.addDurations(eventsOnSelectedDay);

    return (
      <ContentWrapper>
        <section
          id="schedule"
          css={{
            padding: "110px 0 50px 0",
            margin: "0 auto"
          }}
        >
          <h1
            css={{
              textAlign: "center",
              position: "relative",
              zIndex: 2
            }}
          >
            Event Schedule
          </h1>
          <DaySwitcher
            days={eventDays}
            changeDay={(day) => this.changeDay(day)}
          />
          <h3
            {...css({
              textTransform: "uppercase",
              color: "#00205b",
              marginLeft: "16px",
              "@media(max-width: 760px)": { marginLeft: 0 },
              fontWeight: 800
            })}
          >
            {moment(this.state.selectedDay, "YYYY-MM-DD").format(
              "dddd, MMMM Do, YYYY"
            )}
          </h3>
          <MediaQuery query="screen and (min-width: 760px)">
            <EventScheduleFullSizeTable data={data} />
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 760px)">
            <EventScheduleCompressedTable data={data} />
          </MediaQuery>
        </section>
      </ContentWrapper>
    );
  }
}

export default EventSchedule;
