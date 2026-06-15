# RFC 9148 bis patch map

Mapping from **RFC 9148** locations to actions and **cBRSKI -31** source sections.

| RFC 9148 bis location | Action | cBRSKI -31 source | Fragment block |
|-----------------------|--------|-------------------|----------------|
| §3 (after DTLS 1.3 paragraph) | INSERT §3.1 | §6.1.1 | `section-3.1` |
| §3 (replace Curve25519 future text) | REPLACE + INSERT §3.2 | §6.1.2.1, §6.1.2.2 | `section-3.2` |
| §3 (after fragmentation quote) | INSERT §3.3 | §6.1.4 | `section-3.3` |
| §4.1 discovery example | REPLACE `ct` on `/crts` line | §6.7.5 (implicit) | `section-4.1` |
| §4.1 (after well-known est paragraph) | INSERT base `rt` prose | §15.1 | `section-4.1` |
| §4.3 Payload Formats | REPLACE `/crts` CF paragraph | §6.7.5, §6.8 | `section-4.3` |
| §4.3 Payload Formats | ADD `/sen` `/sren` CF 287 MUST | §6.8 | `section-4.3-sen-sren` |
| §4.5 / Table 4 | ADD 4.06 for `/crts` Accept failure | §6.8 | `section-4.5` |
| §4.9 (new) | INSERT CA renewal | §6.7.2 | `section-4.9` |
| §4.10 (new) | INSERT re-enrollment + TA change | §6.7.3, §6.7.4 | `section-4.10` |
| §8.2 Resource Type registry | ADD `ace.est` row | §15.1 | `section-8.2` |
| Introduction | ADD Updates boilerplate | §5 | `front-matter` |

## Not included in RFC 9148 bis (remain in cBRSKI only)

| Topic | cBRSKI source | Reason |
|-------|---------------|--------|
| Voucher-pinned CA skip-`/crts` bootstrap | §6.7.1 steps 1–3 | BRSKI/cBRSKI-specific |
| Enrollment status telemetry `/es` on failure | §6.7.1 step 5, §6.7.4 step 4 | BRSKI resource; optional cross-ref only |
| Join Proxy PMTU motivation | §6.1.4 (Join Proxy) | Deployment-specific to cBRSKI |
| Registrar COSE header stripping | §6.8 (x5bag/x5chain) | cBRSKI voucher transport |

## Renumbering note

Inserting §4.9 and §4.10 may require renumbering subsequent RFC 9148 sections (current §4.6–§4.8 become §4.11–§4.13, etc.) unless the bis editor merges lifecycle text into an existing §4 subsection.
