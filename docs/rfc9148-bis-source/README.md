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
| `rfc9148-bis-update-fragment.xml` | RFC 7991 v3 XML; render with `xml2rfc --text rfc9148-bis-update-fragment.xml` |
| `rfc9148-bis-update-fragment.mkd` | mmark/kramdown source with `<section>` anchors aligned to RFC 9148 numbering |
| `rfc9148-bis-update-fragment.txt` | Plain copy-paste blocks (no tooling required) |
| `rfc9148-bis-update-fragment-from-xml.txt` | Text rendered from XML via `xml2rfc --text` (validates XML structure) |
| `rfc9148-bis-skeleton.txt` | **Merged RFC 9148 bis skeleton** (RFC 9148 + all fragment updates applied) |
| `rfc9148-bis-skeleton.mkd` | Same skeleton wrapped for mmark (regenerate via build script) |
| `build-rfc9148-bis-skeleton.py` | Script to regenerate the merged skeleton from `rfc9148.txt` |
| `rfc9148-bis-patch-map.md` | Section-by-section map: RFC 9148 location → action → cBRSKI source |
| `rfc9148.txt` | Cached RFC 9148 source text (downloaded by build script) |

## Regenerate merged skeleton

```bash
cd docs/rfc9148-bis-source
python3 build-rfc9148-bis-skeleton.py
```

Downloads `rfc9148.txt` if missing, applies all fragment updates, writes
`rfc9148-bis-skeleton.txt` and `rfc9148-bis-skeleton.mkd`.

## Usage (fragment-only workflow)

1. **Quick copy-paste:** use `rfc9148-bis-update-fragment.txt`.
2. **Structured editing:** use `rfc9148-bis-update-fragment.mkd` or `rfc9148-bis-update-fragment.xml`.
3. **Full merged draft:** use `rfc9148-bis-skeleton.txt` (or regenerate with the build script).
4. **Validate XML:** `xml2rfc --text rfc9148-bis-update-fragment.xml`.
5. Cross-check against `rfc9148-bis-patch-map.md` and cBRSKI -31 before WG submission.

## Scope

The fragment generalizes cBRSKI text into EST-coaps terminology (`EST-coaps client/server`) wherever the update applies to all EST-coaps implementations. Bootstrap-only procedures that depend on BRSKI vouchers remain in cBRSKI and are marked **informative / out of scope** in the fragment.

## Provenance

Generated from analysis of cBRSKI -31 Section 5 (Updates to RFC 9148) and the corresponding normative sections 6.1, 6.7, 6.8, and 15.1.
