#!/usr/bin/env bash

set -euo pipefail

EVENT_NAME="${1:-unknown}"
HOOKS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="${HOOKS_DIR}/agent-events.log"
TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

# Hook payloads are commonly provided through stdin; store as base64 to keep one log line per event.
PAYLOAD_B64=""
if [[ ! -t 0 ]]; then
  PAYLOAD_B64="$(cat | base64 | tr -d '\n')"
fi

printf '%s\tevent=%s\tpayload_b64=%s\n' "${TIMESTAMP}" "${EVENT_NAME}" "${PAYLOAD_B64}" >> "${LOG_FILE}"