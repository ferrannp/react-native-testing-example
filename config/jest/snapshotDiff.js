import snapshotDiff, { toMatchDiffSnapshot } from 'snapshot-diff';

expect.extend({ toMatchDiffSnapshot });
expect.addSnapshotSerializer(snapshotDiff.getSnapshotDiffSerializer());
