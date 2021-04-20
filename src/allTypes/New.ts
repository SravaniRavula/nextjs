import { objectType } from "@nexus/schema";

export const New = objectType({
    name:"new",
    definition(t) {
        t.string("img");
        t.string("publish");
        t.string("title");
        t.string("text");
    },
});