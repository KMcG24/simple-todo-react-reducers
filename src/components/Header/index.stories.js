import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "./index";

storiesOf("Header", module)
  .add("simple", () => <Header title="To Dos" />)
  .add("red color", () => <Header title="To Dos" color="red" />);
