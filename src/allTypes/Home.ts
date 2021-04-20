import {objectType} from "@nexus/schema";

export const Home = objectType({
    name: "Home",
    definition(t) {
        t.string("img");
        t.string("name");
        t.string("paragraph");
        t.string("button");     
       
    },
});


