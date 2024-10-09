import { ndk } from "$lib/helpers/ndk";
import { NDKEvent } from "@nostr-dev-kit/ndk";
import type { EventTemplate, SignedEvent } from "blossom-client-sdk";

export const blossomClientSignEvent = async (draft: EventTemplate): Promise<SignedEvent> => {
    const event = new NDKEvent(ndk);
    event.kind = draft.kind;
    event.content = draft.content;
    event.tags = draft.tags;

    await event.sign();
    const signedEvent = {
        id: event.id,
        pubkey: event.pubkey,
        kind: event.kind,
        content: event.content,
        tags: event.tags,
        created_at: event.created_at ?? Math.round(Date.now() / 1000),
        sig: event.sig ?? ""
    };

    return signedEvent;
};

