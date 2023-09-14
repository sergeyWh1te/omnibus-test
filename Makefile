.PHONY: install_anvil
install_anvil:
	cargo install --git https://github.com/foundry-rs/foundry anvil \
	--bin anvil \
	--target-dir ./third_party/anvil/artifacts \
	--root ./third_party/anvil

.PHONY: run_anvil
run_anvil:
	./third_party/anvil/bin/anvil \
	--fork-url https://mainnet.infura.io/v3/64ae836fa4bd4dabbd8e198168f7079f \
	--fork-block-number 17572253 \
	--auto-impersonate \
	--gas-price 0 \
	--base-fee 0 \
	--chain-id 1  \
	--gas-limit 30000000 \
	--accounts 15 \
	--balance 10000 \
	--mnemonic "test test test test test test test test test test test junk" \
	--config-out ./etc/anvil.json

# --block-base-fee-per-gas 0 \