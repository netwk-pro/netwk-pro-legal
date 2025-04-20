/*
  postcss.config.js

  SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
  This file is part of Network Pro.
*/

import autoprefixer from "autoprefixer";

export default {
  plugins: [
    autoprefixer({
      add: true,
      remove: false,
    }),
  ],
};
