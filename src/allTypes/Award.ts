import { objectType } from "@nexus/schema";

export const Award = objectType({
    name:"Award",
    definition(t) {
        t.string("img");
        t.string("publish");
        t.string("title");
        t.string("text");
    },
});