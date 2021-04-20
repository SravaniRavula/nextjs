import { queryType } from "@nexus/schema";
import { data } from "../../src/data";

import { Home, Award, New } from "./index"

export const Query = queryType({
    definition(t) {
        t.field("home", {
            type:Home,
            resolve: () => data.home,
        });

        t.list.field("awards", {
            type:Award,
            resolve: () => data.award,
        });

        t.list.field("news", {
            type:New,
            resolve: () => data.News,
        });
    },
});