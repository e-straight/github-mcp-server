# RFC 9148 bis update fragment (from cBRSKI)

This directory holds source material for normative updates to [RFC 9148](https://www.rfc-editor.org/rfc/rfc9148) (EST-coaps), extracted and rewritten from:

- **Title:** Constrained Bootstrapping Remote Secure Key Infrastructure (cBRSKI)
- **Name:** `draft-ietf-anima-constrained-voucher-31.txt`
- **WG:** [ANIMA](https://datatracker.ietf.org/wg/anima/about/)
- **Date:** 2026-06-08
- **Authors:** Michael Richardson, Peter van der Stok, Panos Kampanakis, Esko Dijk

## Files

| File | Purpose |
|------|---------|
| `draft-ietf-anima-constrained-voucher-31.txt` | Upstream cBRSKI Internet-Draft (reference copy) |
| `rfc9148-bis-update-fragment.mkd` | Paste-ready replacement/insert text for an RFC 9148 bis, with `<section>` tags aligned to RFC 9148 numbering |
| `rfc9148-bis-patch-map.md` | Section-by-section map: RFC 9148 location → action → cBRSKI source |

## Usage

1. Open `rfc9148-bis-update-fragment.mkd`.
2. For each `<section anchor="..." title="...">` block, apply the indicated **REPLACE**, **INSERT**, or **ADD** action at that location in the RFC 9148 bis source.
3. Cross-check against `rfc9148-bis-patch-map.md` and the live cBRSKI draft before submitting to the ANIMA WG or RFC Editor.

## Scope

The fragment generalizes cBRSKI text into EST-coaps terminology (`EST-coaps client/server`) wherever the update applies to all EST-coaps implementations. Bootstrap-only procedures that depend on BRSKI vouchers remain in cBRSKI and are marked **informative / out of scope** in the fragment.

## Provenance

Generated from analysis of cBRSKI -31 Section 5 (Updates to RFC 9148) and the corresponding normative sections 6.1, 6.7, 6.8, and 15.1.
